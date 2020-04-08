import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import { postRequest } from "../../utils/backEndFetch";

export default function CommentSection({
  reply,
  title,
  scrollToComments,
  postId,
  comments,
}) {
  const [collapsed, setCollapsed] = React.useState(
    scrollToComments ? false : true
  );
  const [replyComment, setReplyComment] = React.useState("");
  const handleCollapsed = (e) => {
    setCollapsed(!collapsed);
    e.target.textContent = collapsed ? "hide comments" : "show all comments";
  };

  const postComment = () => {
    postRequest("/comment", { post_id: postId, comment: replyComment }).then(
      (response) => {
        if (response.status) setReplyComment("");
      }
    );
  };
  console.log(comments[0])
  return (
    <Comment.Group style={{ margin: 0, paddingRight: 30 }}>
      {title ? (
        <Header as="h3" dividing>
          Comments
        </Header>
      ) : (
        ""
      )}

      <a onClick={handleCollapsed}>see all comments</a>

      {comments.length !== 0 && comments ? (
        comments.map((comment, i) => (
          <Comment.Group>
            <Comment collapsed={collapsed}>
              <Comment.Avatar src={comment.user_info.profile_image} />
              <Comment.Content>
                <Comment.Author as="a">
                  {comment.user_info.first_name +
                    " " +
                    comment.user_info.last_name}{" "}
                  <Comment.Metadata>
                    <div>{comment.created}</div>
                  </Comment.Metadata>
                </Comment.Author>
                <Comment.Text>{comment.comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        ))
      ) : (
        <Comment collapsed={false}>
          <Comment.Text>There is no comments, be the First</Comment.Text>
        </Comment>
      )}
      {reply ? (
        <Form reply>
          <Form.TextArea
            value={replyComment}
            onChange={(event) => setReplyComment(event.target.value)}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            style={{ width: "100%" }}
            onClick={() => postComment()}
          />
        </Form>
      ) : (
        ""
      )}
    </Comment.Group>
  );
}

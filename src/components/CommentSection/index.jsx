import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import comments from "./comments.json";
import "./style.css";
export default function CommentSection({
  reply,
  title,
  scrollToComments,
  latest_comment,
}) {
  const [collapsed, setCollapsed] = React.useState(
    scrollToComments ? false : true
  );
  const handleCollapsed = (e) => {
    setCollapsed(!collapsed);
    e.target.textContent = collapsed ? "hide comments" : "show all comments";
  };

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
      {latest_comment ? (
        <Comment collapsed={false}>
          <Comment.Avatar src={latest_comment.user_info.profile_image} />
          <Comment.Content>
            <Comment.Author as="a">
              {latest_comment.user_info.first_name +
                " " +
                latest_comment.user_info.last_name}{" "}
              <Comment.Metadata>
                <div>{latest_comment.created}</div>
              </Comment.Metadata>
            </Comment.Author>
            <Comment.Text>{latest_comment.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
      ) : latest_comment === false || comments.length === 0?(
        <Comment collapsed={false}>
          <Comment.Text>There is no comments, be the First</Comment.Text>
        </Comment>
      ) : (
        comments.map((comment, i) => (
          <Comment collapsed={collapsed}>
            <Comment.Avatar src={comment.avatar} />
            <Comment.Content>
              <Comment.Author as="a">
                {comment.author}{" "}
                <Comment.Metadata>
                  <div>{comment.time}</div>
                </Comment.Metadata>
              </Comment.Author>
              <Comment.Text>{comment.text}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))
      )}
      {reply ? (
        <Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            style={{ width: "100%" }}
          />
        </Form>
      ) : (
        ""
      )}
    </Comment.Group>
  );
}

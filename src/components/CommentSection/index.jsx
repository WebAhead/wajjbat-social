import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import comments from "./comments.json";
import './style.css'
export default function CommentSection() {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleCollapsed = e => {
    setCollapsed(!collapsed);
    e.target.textContent = collapsed ? "hide comments" : "show all comments";
  };

  return (
    <Comment.Group style={{ margin: 0 ,paddingRight:30}}>
      <Header as="h3" dividing>
        Comments
      </Header>
      <a onClick={handleCollapsed}>see all comments</a>

      {comments.map((comment, i) => (
        <Comment collapsed={comment.top ? "" :  collapsed } >
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
      ))}

      <Form reply>
        <Form.TextArea/>
        <Button content="Add Reply" labelPosition="left" icon="edit" primary style={{width:'100%'}}/>
      </Form>
    </Comment.Group>
  );
}

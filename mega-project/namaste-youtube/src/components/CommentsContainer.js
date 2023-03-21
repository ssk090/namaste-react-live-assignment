import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Shivananda Sai",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Shivananda Sai",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Shivananda Sai",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Shivananda Sai",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Shivananda Sai",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Shivananda Sai",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Shivananda Sai",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Shivananda Sai",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Smriti Laxmi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Alex Lee",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Sai Sagar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "6Nice Guy9",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { resetFakeAsyncZone } from "@angular/core/testing";
import { format } from "url";

@Component({
  selector: "app-social-post",
  templateUrl: "./social-post.component.html",
  styleUrls: ["./social-post.component.css"]
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    { title: "JavaScript is Crazy", thought: "sklj;iwjaer;hwer;owihr" },
    {
      title: "I love coding (most of the time",
      thought: "askldjfs;ajdf;lwkjer"
    },
    { title: "Are we all going to get jobs after bootcamp?", thought: "yes" }
  ];

  constructor() {}
  onDelete(index: number): void {
    this.posts.splice(index, 1);
  }
  onSubmit(newPost: Post) {
    this.posts.push(newPost);
  }
  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Input()
  index: number;
  @Output()
  deleted = new EventEmitter<void>();

  //we are defining the event that is sparked by the click which the parent is listening for

  constructor() {}

  deletePost() {
    this.deleted.emit();
  }
  ngOnInit() {}
}

import "github-markdown-css/github-markdown.css";
import { h, render } from "preact";
import App from "./App";
import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById("root")!);

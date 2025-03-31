import html from "../components/skills/html.svg";
import css from "../components/skills/css.svg";
import javascript from "../components/skills/javascript.svg";
import nextJS from "../components/skills/nextJS.svg";
import react from "../components/skills/react.svg";
import typescript from "../components/skills/typescript.svg";
import tailwind from "../components/skills/tailwind.svg";
import firebase from "../components/skills/firebase.svg";
import git from "../components/skills/git.svg";
import graphql from "../components/skills/graphql.svg";
import materialui from "../components/skills/materialui.svg";
import electronjs from "../components/skills/electronjs.svg";
import figma from "../components/skills/figma.svg";
import redux from "../components/skills/redux.svg";
import chakraui from "../components/skills/chakraui.svg";
import github from "../components/skills/github.svg";
import jira from "../components/skills/jira.svg";
import contentful from "../components/skills/contentful.svg";
import clickup from "../components/skills/clickup.svg";
import socketio from "../components/skills/socketio.svg";
import gsap from "../components/skills/gsap.svg";
import sass from "../components/skills/sass.svg";
import sqlite from "../components/skills/sqlite.svg";

export const skillsImage = (skill: any) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "sass":
      return sass;
    case "sqlite":
      return sqlite;
    case "gsap":
      return gsap;
    case "socketio":
      return socketio;
    case "clickup":
      return clickup;
    case "contentful":
      return contentful;
    case "jira":
      return jira;
    case "html":
      return html;
    case "css":
      return css;
    case "electronjs":
      return electronjs;
    case "javascript":
      return javascript;
    case "nextjs":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "github":
      return github;
    case "tailwind":
      return tailwind;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "materialui":
      return materialui;
    case "figma":
      return figma;
    case "redux":
      return redux;
    case "chakraui":
      return chakraui;
    default:
      break;
  }
};

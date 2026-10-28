import Project from "./components/projects/project.jsx";
import Contact from "./components/contact/contact.jsx";
import Avatar from "./components/avatar/avatar.jsx";
import Timeline from "./components/timeline.jsx";

export default function Home() {
  return (
    <div>
      <Avatar />
      <Project />
      <Timeline />
      <Contact />
    </div>
  );
}

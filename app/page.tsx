import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
  Shubham Choudhary
</h1>
<div className="prose prose-neutral dark:prose-invert">
  <p>
    Hi, I'm Shubham – a passionate Web Developer specializing in building fast, SEO-friendly, and responsive websites using modern technologies.
  </p>
  <p>
    With 3+ years of experience and 25+ projects delivered globally, I work with businesses and startups to bring their ideas to life through professional websites built on WordPress, PHP, MySQL, and more.
  </p>
  <p>
  You can view some of my featured work on the{" "}
  <a href="http://localhost:3000/projects" target="_blank">Projects Page</a>.
 </p>
  <p>
    I'm always excited to collaborate on new projects. Feel free to{" "}
    <a href="mailto:shubhamchoudharyshubh@gmail.com">get in touch</a> or connect via{" "}
    <a href="https://www.linkedin.com/in/shubham-choudhary-shubh" target="_blank">LinkedIn</a>.
  </p>
</div>

    </section>
  );
}

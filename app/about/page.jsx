"use client";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import FormSection from "@/components/about/FormSection";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const linkClasses =
    "underline underline-offset-2 decoration-2 decoration-indigo-500 hover:text-white hover:decoration-indigo-400 duration-300";
  const formSections = [
    {
      labelText: "Name",
      inputName: "name",
      inputType: "text",
      inputPlaceholder: "Your Name...",
      inputValue: nameInput,
      inputOnChange: (e) => setNameInput(e.target.value),
    },
    {
      labelText: "Email",
      inputName: "email",
      inputType: "email",
      inputPlaceholder: "Your Email...",
      inputValue: emailInput,
      inputOnChange: (e) => setEmailInput(e.target.value),
    },
    {
      labelText: "Message",
      inputName: "message",
      inputType: "text",
      inputPlaceholder: "Your Message...",
      inputValue: messageInput,
      inputOnChange: (e) => setMessageInput(e.target.value),
    },
  ];

  const clearInputs = () => {
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
  };

  return (
    <>
      <PageContainer>
        <img
          src="https://blog.richersounds.com/wp-content/uploads/2016/02/matrix-reloaded-fight-scene-radically-recut-with-8-bit-sound1.png"
          alt="General Page Image - A scene from Matrix Reloaded"
          loading="lazy"
          className="rounded-xl w-full object-cover"
        />
        <div className="grid space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold mt-4 md:mt-6">About Flickster</h1>
          <p>
            Flickster is a web application designed to provide an intuitive and
            user-friendly platform for browsing and selecting movies. With a
            vast database of movies, Flickster offers detailed information about
            each movie, including a full description, similar movies, and user
            ratings.
          </p>
          <h2 className="font-bold text-xl pt-2">
            The Motivation Behind Flickster
          </h2>
          <p>
            The idea behind Flickster was born out of a passion for movies and a
            desire to simplify the process of browsing and selecting movies.
            With the rise of streaming services and online movie databases,
            there's more content available than ever before. However, navigating
            these platforms can be overwhelming, with endless options and a lack
            of structure.
          </p>
          <p>
            Flickster aims to address this issue by providing a simple, clean
            interface that makes it easy to browse and select movies. Whether
            you're looking for a movie to watch tonight, or you're on the hunt
            for your next favorite series, Flickster is the place to go.
          </p>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic">
            "A film is like a novel, but instead of being written, it's filmed."
          </blockquote>
          <h2 className="font-bold text-xl pt-2">The History of Movies</h2>
          <p>
            Movies have been a staple of popular culture since the early 20th
            century. From the silent films of the 1920s to the blockbuster
            action movies of today, movies have evolved to reflect the times.
            They've captured our imaginations, sparked debates, and shaped our
            understanding of the world.
          </p>
          <h2 className="font-bold text-xl pt-2">Why Movies Matter</h2>
          <p>
            Movies are more than just entertainment. They're a reflection of our
            culture, our society, and our times. They tell stories, they make us
            laugh, they make us cry, and they inspire us. They're a universal
            language that transcends borders and cultures.
          </p>
          <h2 className="font-bold text-xl pt-2">Why Flickster is Useful</h2>
          <p>
            Flickster is a tool that makes browsing and selecting movies easier
            and more enjoyable. With its simple interface and comprehensive
            database, Flickster allows you to find the perfect movie for any
            occasion. Whether you're looking for a movie to watch with friends,
            or you're on the hunt for your next favorite series, Flickster is
            here to help.
          </p>
          <h2 className="font-bold text-xl pt-2">Contact Information</h2>
          <p>
            For more information about Flickster, or if you have any questions
            or comments, feel free to contact us.
          </p>
          <div className="flex items-center gap-2">
            <Link className={linkClasses} href="https://github.com/seesmof">
              GitHub
            </Link>
            <Link className={linkClasses} href="mailto:seesmwork@gmail.com">
              Email
            </Link>
          </div>
          <h2 className="font-bold text-xl pt-2">Contact Us</h2>
          <p>
            Please fill out the form below if you have any questions left and
            we'll get back to you.
          </p>
          <div className="grid gap-4">
            {formSections.map((section) => (
              <FormSection key={section.inputName} {...section} />
            ))}
            <Button
              className="w-full sm:w-max"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
          <p className="text-neutral-300 text-sm text-center hidden sm:block">
            Web technology and design @2023
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export default About;

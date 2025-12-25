
function Contact() {
  
  return (
    <section className="max-w-4xl mx-auto py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold mb-10">
        Contact <span className="text-indigo-600">Me</span>
      </h1>

      <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border">

        <p className="text-gray-700 mb-8 leading-relaxed">
          I’m open to job opportunities, freelance work, and collaborations.
          Feel free to reach out through any of the platforms below.
        </p>

        <ul className="space-y-5 text-gray-700">

          {/* EMAIL */}
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:afjalsayyad17@gmail.com"
              className="text-indigo-600 hover:underline"
            >
             afjalsayyad17@gmail.com
            </a>
          </li>

          {/* PHONE */}
          <li>
            <span className="font-medium">Phone:</span>{" "}
            <a
              href="tel:+919403678211"
              className="text-indigo-600 hover:underline"
            >
              +91 9403678211
            </a>
          </li>

          {/* GITHUB */}
          <li>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/afjalsayyad"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              github.com/afjalsayyad
            </a>
          </li>

          {/* LINKEDIN */}
          <li>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/afjal-sayyad-23b5a5385/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/afjal-sayyad
            </a>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default Contact;

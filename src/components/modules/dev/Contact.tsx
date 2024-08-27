import Link from "next/link";

function Contact() {
  return (
    <section id="kontakt" className="py-[5rem] bg-[#130a4f] text-[#ffffff]">
      <div className="max-w-[1000px] w-[90%] mx-auto">
        <span>
          <h3 className="font-medium uppercase">kontakt</h3>
          <div className="bg-white w-[50px] h-[1.3px]" />
        </span>
        <div className="flex flex-wrap justify-around mt-3 gap-5 min-h-[400px]">
          <div className="flex-grow w-[400px] mb-[2rem]">
            <h2 className="text-4xl font-bold">Skontaktuj się z nami</h2>
            <ul className="space-y-2 mt-[10%]">
              <li className="italic text-xl font-medium mb-3">name</li>
              <li className="font-medium">
                Firma Remontowo Budowlana DIAK-BUD
              </li>
              <li>
                <span className="font-semibold">ul.</span> ulica
              </li>
              <li>
                <span className="font-semibold">email:</span>{" "}
                <span>biznes@main.com</span>
                {/* <Link href="mailto:diak-bud@wp.pl">diak-bud@wp.pl</Link> */}
              </li>
              <li>
                <span className="font-semibold">tel:</span>{" "}
                <Link href="tel:000 000 000">+48 000 000 000</Link>
              </li>
            </ul>
          </div>
          <div className="flex-grow w-[450px] min-h-[350px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2574.3832928879183!2d18.980310195807228!3d51.18046060806701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1713554249794!5m2!1spl!2spl"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

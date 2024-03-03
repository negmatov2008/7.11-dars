import React from "react";
import { styled } from "styled-components";

const ContactStyle = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 32px;
  padding-top: 40px;
  padding-bottom: 80px;
  color: #33323d;

  @media screen and (min-width: 760px) {
    padding-top: 94px;
    padding-bottom: 96px;
  }
  @media screen and (min-width: 1340px) {
    gap: 48px;
  }
`;

const First = styled.div`
  padding-block: 30px;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 760px) {
    padding-block: 32px;
  }
  @media screen and (min-width: 1340px) {
    gap: 125px;
    flex-direction: row;
  }
`;

const Second = styled.div`
  padding-block: 30px;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 760px) {
    padding-block: 32px;
  }
  @media screen and (min-width: 1340px) {
    gap: 125px;
    flex-direction: row;
  }
`;

function Contact() {
  return (
    <>
      <ContactStyle>
        <First>
          <h1 className="text-[40px] font-[700]">Get in Touch</h1>
          <div className="max-w-[635px] flex flex-col gap-[24px]">
            <p className="text-[15px] opacity-[0.8]">
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="24"
              viewBox="0 0 104 24"
              fill="none"
            >
              <path
                d="M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z"
                fill="#33323D"
              />
              <path
                d="M64 4.55705C63.117 4.94905 62.168 5.21305 61.172 5.33205C62.189 4.72305 62.97 3.75805 63.337 2.60805C62.386 3.17205 61.332 3.58205 60.21 3.80305C59.313 2.84605 58.032 2.24805 56.616 2.24805C53.437 2.24805 51.101 5.21405 51.819 8.29305C47.728 8.08805 44.1 6.12805 41.671 3.14905C40.381 5.36205 41.002 8.25705 43.194 9.72305C42.388 9.69705 41.628 9.47605 40.965 9.10705C40.911 11.388 42.546 13.522 44.914 13.997C44.221 14.185 43.462 14.229 42.69 14.081C43.316 16.037 45.134 17.46 47.29 17.5C45.22 19.123 42.612 19.848 40 19.54C42.179 20.937 44.768 21.752 47.548 21.752C56.69 21.752 61.855 14.031 61.543 7.10605C62.505 6.41105 63.34 5.54405 64 4.55705Z"
                fill="#33323D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.4 0H101.6C102.92 0 104 1.08 104 2.4V21.6C104 22.92 102.92 24 101.6 24H82.4C81.08 24 80 22.92 80 21.6V2.4C80 1.08 81.08 0 82.4 0ZM83.6 20.4H87.2V9.6H83.6V20.4ZM85.4 7.56C84.2 7.56 83.24 6.6 83.24 5.4C83.24 4.2 84.2 3.24 85.4 3.24C86.6 3.24 87.56 4.2 87.56 5.4C87.56 6.6 86.6 7.56 85.4 7.56ZM96.8 20.4H100.4V13.56C100.4 11.28 98.48 9.36 96.2 9.36C95.12 9.36 93.8 10.08 93.2 11.04V9.6H89.6V20.4H93.2V14.04C93.2 13.08 94.04 12.24 95 12.24C95.96 12.24 96.8 13.08 96.8 14.04V20.4Z"
                fill="#33323D"
              />
            </svg>
          </div>
        </First>
        <Second>
          <h1 className="text-[40px] font-[700]">Contact Me</h1>
          <form className="flex flex-col lg:flex-1 gap-[24px]">
            <div className="flex flex-col max-w-full gap-[8px]">
              <span className="text-[13px] block opacity-[0.8] font-[700]">
                Name
              </span>
              <input
                type="text"
                className="max-w-full py-[9px] pl-[16px] text-[13px] bg-[rgba(51,_50,_61,_0.1)]"
                placeholder="Jane Appleseed"
              />
            </div>

            <div className="flex flex-col max-w-full gap-[8px]">
              <span className="text-[13px] block opacity-[0.8] font-[700]">
                Email Address
              </span>
              <input
                type="email"
                className="max-w-full py-[9px] pl-[16px] text-[13px] bg-[rgba(51,_50,_61,_0.1)]"
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col max-w-full gap-[8px]">
              <span className="text-[13px] block opacity-[0.8] font-[700]">
                Message
              </span>
              <input
                type="text"
                className="max-w-full pt-[9px] pb-[57px] pl-[16px] text-[13px] bg-[rgba(51,_50,_61,_0.1)]"
                placeholder="How can I help?"
              />
            </div>

            <button className="text-[12px] py-[17px] px-[24px] max-w-[200px] bg-[#203A4C] text-[#fff]">
              SEND MESSAGE
            </button>
          </form>
        </Second>
      </ContactStyle>
    </>
  );
}

export default Contact;

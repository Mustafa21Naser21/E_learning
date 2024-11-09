import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function TermContent() {
  const location = useLocation();
  const { termTitle, termContent, termDescription, attachments } = location.state || {};

  console.log("Attachments in TermContent:", attachments);

  return (
    <>
      <Header />
      <section>
        <div className="term-content">
          <div className="term-title mt-10">
            <div className="mt-10 px-10">
              <h1 className="text-5xl font-bold max-sm:text-4xl">البند :</h1>
              <h1 className="text-2xl mt-4 h-auto px-4 term-content">{termContent}</h1>
            </div>
            <div className="mt-10 px-10">
              <h1 className="text-5xl font-bold max-sm:text-4xl">ملخص البند:</h1>
              <h1 className="text-2xl mt-4 h-auto px-4 term-description">{termDescription}</h1>
            </div>
          </div>

          {attachments && attachments.length > 0 && (
            <div className="attachments mt-10 mb-10 grid grid-cols-3 gap-y-10 gap-x-4 justify-items-center max-sm:grid-cols-1">
              {attachments.map((attachment, index) => (
                <div key={index} className="attached mt-20 w-52 h-52 text-center bg-orange text-white p-4 rounded-2xl">
                  <h1 className="attached-text text-2xl">
                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.name}</a>
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

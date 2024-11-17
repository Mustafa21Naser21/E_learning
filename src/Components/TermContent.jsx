import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function TermContent() {
  const location = useLocation();

  // اجلب القيم من state
  const { termTitle, termContent, termDescription, attachments } = location.state || {};

  console.log("Received state in TermContent:", { termTitle, termContent, termDescription, attachments });

  if (!termTitle || !termContent || !termDescription) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">لا توجد بيانات لعرضها</h1>
      </div>
    );
  }

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

          {/* عرض المرفقات */}
          {attachments && attachments.length > 0 ? (
        <div
        className={`attachments mt-10 mb-10 grid gap-y-10 gap-x-4 place-items-center max-sm:grid-cols-1`}
        style={{
          gridTemplateColumns: attachments.length % 3 === 1 ? "repeat(3, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
              {attachments.map((attachment, index) => (
                <div
                key={index}
                className={`attached mt-20 w-52 h-52 text-center text-white p-4 rounded-2xl ${
                  index % 2 === 0 ? "bg-orange" : "bg-move"
                } ${
                  // Center the attachment if it's the only item in the row
                  attachments.length % 3 === 1 && index === attachments.length - 1 ? "col-span-3 justify-self-center" : ""
                }`}
              >
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                    style={{textDecoration:'none'}}
                  >
                    <h1 className="attached-text text-2xl mb-2">{attachment.name}</h1>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-10">
              <h1 className="text-2xl font-bold">لا توجد مرفقات</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

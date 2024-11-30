import Header from "./Header";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function TermContent({ currentCategory, setCurrentCategory }) {
  const location = useLocation();
  const { termContent, termDescription, attachments = [] } = location.state || {};
  const [localAttachments, setLocalAttachments] = useState(attachments);

  // دالة حذف المرفق
  const deleteAttachment = (event, index) => {
    event.preventDefault();
  
    Swal.fire({
      title: "تنبيه",
      text: "هل أنت متأكد من حذف المرفق؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "##3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف",
      cancelButtonText: "تراجع",
    }).then((result) => {
      if (result.isConfirmed) {
        // تحديث الحالة المحلية
        const updatedAttachments = localAttachments.filter((_, i) => i !== index);
        setLocalAttachments(updatedAttachments);
  
        // تحديث localStorage
        const updatedTerms = currentCategory.terms.map((term) => {
          if (term.content === termContent) {
            return { ...term, attachments: updatedAttachments }; // حذف المرفق من البند
          }
          return term;
        });
  
        const updatedCategory = { ...currentCategory, terms: updatedTerms };
        setCurrentCategory(updatedCategory);
  
        // تحديث الفئة في localStorage
        localStorage.setItem(currentCategory.title, JSON.stringify(updatedCategory));
  
        Swal.fire("تم الحذف!", "تم حذف المرفق بنجاح.", "success");
      }
    });
  };
  

  return (
    <>
      <Header />

      <div className="back-home">
        <Link to="/homeadmin">
          <i className="fa-solid fa-house text-3xl cursor-pointer text-header" />
        </Link>
      </div>

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
          {localAttachments.length > 0 ? (
            <div
              className={`attachments mt-10 mb-10 grid gap-y-10 gap-x-4 place-items-center max-sm:grid-cols-1`}
              style={{
                gridTemplateColumns:
                  localAttachments.length % 3 === 1
                    ? "repeat(3, 1fr)"
                    : "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {localAttachments.map((attachment, index) => (
                <div
                  key={index}
                  className={`attached mt-20 w-52 h-52 text-center text-white p-4 rounded-2xl relative max-sm:text-base max-sm:w-40 max-sm:h-40 ${
                    index % 2 === 0 ? "bg-orange" : "bg-move"
                  } ${
                    localAttachments.length % 3 === 1 && index === localAttachments.length - 1
                      ? "col-span-3 justify-self-center"
                      : ""
                  }`}
                >
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                    style={{ textDecoration: "none" }}
                  >
                    <h1 className="attached-text text-2xl mb-2">{attachment.name}</h1>
                  </a>
                  {/* أيقونة الحذف */}
                  <i
                    className="fa-solid fa-trash cursor-pointer"
                    onClick={(event) => deleteAttachment(event, index)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-10">
              <h1 className="text-center mt-20 mb-20 text-3xl text-black font-bold">
                لا توجد مرفقات
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

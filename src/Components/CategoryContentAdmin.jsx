import Header from './Header';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

// دالة للحصول على كلاس النمط الأساسي term-down أو term-up
function getTermClass(index) {
  const cycle = Math.floor(index / 3) % 2; // يحدد النمط الأساسي لكل مجموعة من 3 بنود
  const baseClass = cycle === 0 ? 'term-down' : 'term-up';

   // من term1 إلى term6 بناءً على الفهرس

  return `${baseClass}`;
}

export default function CategoryContentAdmin({ currentCategory, setCurrentCategory, setCategories }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { termTitle, termContent, termDescription, } = location.state || {};

  const [category, setCategory] = useState(currentCategory || { title: "", content: "", description: "", terms: [] });

  useEffect(() => {
    if (termTitle && termContent && termDescription) {
      const newTerm = { title: termTitle, content: termContent, description: termDescription };
      
      // تحقق من عدم وجود البند مسبقًا لتجنب التكرار
      if (!category.terms.some(term => term.title === newTerm.title)) {
        const updatedCategory = { ...category, terms: [...category.terms, newTerm] };
        setCategory(updatedCategory);
        setCurrentCategory(updatedCategory);
        setCategories(prevCategories => 
          prevCategories.map(cat => cat.title === updatedCategory.title ? updatedCategory : cat)
        );
      }
    }
  }, [termTitle, termContent, termDescription]);

  function handleTermClick(term) {
    navigate('/termcontent', {
      state: {
        termTitle: term.title,
        termContent: term.content,
        termDescription: term.description,
        attachments: term.attachments || []
      }
    });
    
  }

  function handleEditTerm(event, term) {
    event.stopPropagation(); // منع تفعيل `handleTermClick`
    navigate('/addterm', {
      state: {
        isEdit: true, // تحديد أن العملية هي تعديل
        termTitle: term.title,
        termContent: term.content,
        termDescription: term.description,
        attachments: term.attachments || [],
        termColor: term.color || "#ffffff"
      }
    });
  }
  

  function deleteTerm(event, termIndex) {
    event.stopPropagation();
    Swal.fire({
      title: "تنبيه",
      text: "سوف يتم حذف البند المحدد",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف",
      cancelButtonText: "تراجع"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTerms = category.terms.filter((_, index) => index !== termIndex);
        const updatedCategory = { ...category, terms: updatedTerms };

        setCategory(updatedCategory);
        setCurrentCategory(updatedCategory);

        setCategories(prevCategories => 
          prevCategories.map(cat => cat.title === updatedCategory.title ? updatedCategory : cat)
        );

        Swal.fire({
          title: "تم حذف البند بنجاح",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <Header />
      <section>
        <div className="category-content relative">
          <div className="mt-10 px-10">
            <h1 className="text-5xl font-bold max-sm:text-4xl">عنوان الفئة:</h1>
            <h1 className="text-2xl h-auto mt-4 title-category">{category.title}</h1>
          </div>
          <div className="mt-10 px-10">
            <h1 className="text-5xl font-bold max-sm:text-4xl">وصف الفئة:</h1>
            <h1 className="text-2xl h-auto mt-4 descrebtion-categoy">{category.description}</h1>
          </div>
          <div className='mt-10 px-10'>
            <h1 className="text-5xl font-bold max-sm:text-4xl">البنود:</h1>
          </div>

          <div className='flex justify-center mt-10'>
            <button className='btn-add w-40 h-16 bg-header text-white text-3xl rounded-lg hover:opacity-90 transition-opacity'>
              <Link to='/addterm'>اضافة بند</Link>
            </button>
          </div>

          <div className="terms mt-10 mb-10 space-y-10">
  {Array.from({ length: Math.ceil(category.terms.length / 3) }).map((_, rowIndex) => {
    
    const rowItems = category.terms.slice(rowIndex * 3, rowIndex * 3 + 3);

    const rowClassName =
      rowItems.length === 1
        ? "flex justify-center"
        : rowItems.length === 2
        ? "flex justify-around"
        : "grid grid-cols-3 justify-items-center";

    return (
      <div key={rowIndex} className={`${rowClassName} w-full`}>
{rowItems.map((term, index) => {
  const termClass = getTermClass(rowIndex * 3 + index);
  const isTermUp = termClass.includes('term-up'); // تحقق إذا كان هذا من نوع term-up
  const isTermDown = termClass.includes('term-down'); // تحقق إذا كان من نوع term-down

  return (
    <div
      key={index}
      className={`${termClass} mt-20 w-60 h-60 cursor-pointer relative`}
      onClick={() => handleTermClick(term)}
      style={{
        backgroundColor: term.color || "#000", 
      }}
    >
      
      {isTermDown && (
        <>
          <div className="flex justify-between header-term">
            <div className="icon-term text-white mt-2 mr-2">
              <i
                onClick={(event) => deleteTerm(event, rowIndex * 3 + index)}
                className="fa-solid fa-trash cursor-pointer ml-4"
              /> 
               <i onClick={(event) => handleEditTerm(event, term)} className="fa-solid fa-pen-to-square cursor-pointer"/>
            </div>
            <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
              {rowIndex * 3 + index + 1}
            </div>
          </div>
          <h2 className="text-center text-white mt-6 h-44 text-xl px-2 term-title">
            {term.title}
          </h2>
        </>
      )}

      {isTermUp && (
        <>
          <h2 className="text-center text-white mt-6 h-44 text-xl px-2 term-title">
            {term.title}
          </h2>
          <div className="flex justify-between header-term">
            <div className="icon-term text-white mt-2 mr-2">
              <i
                onClick={(event) => deleteTerm(event, rowIndex * 3 + index)}
                className="fa-solid fa-trash cursor-pointer ml-4"
              />
            <i onClick={(event) => handleEditTerm(event, term)} className="fa-solid fa-pen-to-square cursor-pointer"/>

            </div>
            <div className="number-term w-8 h-8 py-2 mt-2 text-center text-white bg-black opacity-70">
              {rowIndex * 3 + index + 1}
            </div>
          </div>
        </>
      )}

      <div
        className="term-border"
        style={{
          position: "absolute",
          top: isTermDown ? `100%` : "-50%",
          width: 0,
          height: 0,
          borderLeft: "120px solid transparent",
          borderRight: "120px solid transparent",
          borderTop: isTermDown ? `120px solid ${term.color}` : "none", // إذا كان `term-down` استخدم border-top
          borderBottom: isTermUp ? `120px solid ${term.color}` : "none", // إذا كان `term-up` استخدم border-bottom
          opacity: 0.8,
        }}
      />
    </div>
  );
})}


</div>
    );
  })}


</div>
        
        </div>

      </section>
    </>
  );
}
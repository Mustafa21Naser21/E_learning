import Header from './Header';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function CategoryContentAdmin({ currentCategory, setCurrentCategory, setCategories }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { termTitle, termContent, termDescription } = location.state || {};

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
    console.log("handleTermClick called");
    console.log("Current Category Attachments:", currentCategory.attachments);
    navigate('/termcontent', {
      state: {
        termTitle: term.title,
        termContent: term.content,
        termDescription: term.description,
        attachments: currentCategory.attachments || [] // تمرير المرفقات هنا
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
          title: "تم الحذف بنجاح",
          text: "تم حذف البند بنجاح",
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

          <div className="terms mt-10 mb-10 grid grid-cols-3 justify-items-center">
            {category.terms.map((term, index) => (
              <div key={index} className="term-down term-1 mt-20 w-60 h-60 cursor-pointer bg-darkBlue relative"
                onClick={() => handleTermClick(term)}>
                
                <div className='flex justify-between'>
                  <div className="icon-term text-white mt-2 mr-2">
                    <i onClick={(event) => deleteTerm(event, index)} className="fa-solid fa-trash cursor-pointer ml-4"/>
                    <i className="fa-solid fa-pen-to-square cursor-pointer "/>
                  </div>
                  <div className="number-term w-8 h-8 py-2 text-center text-white bg-black opacity-70">
                    {index + 1}
                  </div>
                </div>
                <h2 className='text-center text-white mt-6 h-44 text-xl px-2 term-title'>{term.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

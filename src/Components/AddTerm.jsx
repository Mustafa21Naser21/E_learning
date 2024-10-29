import Header from './Header'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

export default function AddTerm() {


  function addTerm(){
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "تم  اضافة البند بنجاح",
      showConfirmButton: false,
      timer: 2000
    });
  }
  function addAttached(){
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "تم  اضافة المرفق بنجاح",
      showConfirmButton: false,
      timer: 2000
    });
    file.style.display='none';
  }

    let file=document.querySelector(".add-file");

    function show(e){

      
      document.querySelector(".add-file").style.display='block';
       e.preventDefault();
    }
    function hidden(){
      document.querySelector(".add-file").style.display='none';
    }
    const handleFileChange = (event) => {
      const files = event.target.files;
      console.log("Selected files:", files);
      // هنا يمكنك التعامل مع الملفات بعد تحميلها
    };
  return (

    <>
    <Header />

    <section>

    <div className="add-term relative mt-20">
      

    <form className="" action="">

    <div className=" block">
    <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">عنوان البند :</label>
    <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" type="text" />
    </div>

    <div className=" block mt-10">
    <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">محتوى البند :</label>
    <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" type="text" />
    </div>

    <div className="block mt-10">
    <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4" htmlFor="">شرح البند :</label>
    <textarea style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} className="w-72 h-32 p-4 border border-input outline-slate-400 rounded-lg" name="" id=""></textarea>
    </div>

    <div className=" block mt-10">
    <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">النسبة المئوية :</label>
    <input id="addCategory" value={'0%'} style={{width:'5%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" type="text" />
    </div>

    <div className=" block mt-10">
    <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">المرفقات و الروابط  :</label>
    <button onClick={show} style={{marginRight:'10%'}} className='w-64 h-16 mt-4  font-bold border-2 border-black text-4xl px-4 py-2 rounded-lg'><i className="fa-solid fa-plus px-2  ml-4 text-white bg-header rounded-full"/>اضافة مرفق</button>
    </div>


   </form>

    <div className="btn-add-term">
    <button onClick={addTerm} className="w-60 h-14 mb-10 mt-10 bg-header border-2 border-gray-400 text-white text-4xl px-4 py-2 rounded-lg"> <Link to='/categorytitleadmin'>اضافة بند</Link><i className="fa-solid fa-check  border-2 border-white w-8 h-8 rounded-full text-xl "></i></button>
   </div>

   <div className="add-file bg-white hidden w-96 h-96 rounded-lg">
   <i onClick={hidden} className="fa-solid fa-xmark"/>

   <div className=" block mt-10">
    <label style={{marginRight:'10%'}} className="text-3xl font-bold block mb-4 " htmlFor="addCategory">اسم المرفق  :</label>
    <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-xl" type="text" />
    </div>

    <div className=" block relative mt-10">
    <i className="fa-solid fa-file-arrow-up"/>
    <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
    <i className="fa-solid fa-file-arrow-up"/>
      </label>
      <input 
        id="file-upload" 
        type="file" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
      />
    <label style={{marginRight:'10%'}} className="text-3xl font-bold block mb-4 " htmlFor="addCategory"> تحميل المرفق :</label>
    <input  id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-20 p-4 border border-input outline-slate-400 rounded-xl" type="text" />
    </div>

    <button onClick={addAttached}  className="w-60 h-14 mb-2 mr-28 mt-14 bg-header border-2 border-gray-400 text-white text-4xl px-4 py-2 rounded-lg">اضافة المرفق<i className="fa-solid fa-check  border-2 border-white w-8 h-8 rounded-full text-xl "></i></button>

   </div>


</div>
    </section>
    
    </>


  )
}

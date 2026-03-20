import React from 'react'

const Education_profile = ({ TextColor, bg, dark }) => {
  return (
    
    <section id='education' className={`min-h-screen flex items-center justify-center px-4  ${bg}`}>
      
      <div className={`${bg} p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-xl ${dark ? "border-2 border-blue-600" : "shadow-2xl"}`}>
        <h1 className={`text-2xl ${TextColor} sm:text-3xl font-bold text-center mb-6`}>Education</h1>

        <div className="space-y-4">

          {/* Current School */}
          <div className={`${dark ? "border-2 border-blue-600" : "shadow-2xl"} ${bg} ${TextColor} p-4 rounded-xl shadow hover:scale-105 transition transform`}>
            <h2 className="font-semibold text-lg">College</h2>
            <p className="font-medium text-sm sm:text-base">Bachelor of Science in Information Technology</p>
            <p className="text-sm sm:text-base">Colegio de San Francisco Javier</p>
            <p className="text-sm sm:text-base">2026 - Present</p>
          </div>

          {/* Previous School */}
          <div className={`${dark ? "border-2 border-blue-600" : "shadow-2xl"} ${bg} ${TextColor} p-4 rounded-xl shadow hover:scale-105 transition transform`}>
            <h2 className="font-semibold text-lg">College</h2>
            <p className="font-medium text-sm sm:text-base">Bachelor of Science in Information Technology</p>
            <p className="text-sm sm:text-base">Misamis University</p>
            <p className="text-sm sm:text-base">2023 - 2025</p>
         
          </div>


          {/* Senior High School */}
          <div className={`${dark ? "border-2 border-blue-600" : "shadow-2xl"} ${bg} ${TextColor} p-4 rounded-xl shadow hover:scale-105 transition transform`}>
            <h2 className="font-semibold text-lg">Senior High School</h2>
            <p className="text-sm sm:text-base">Holy Rosary Academy</p>
            <p className="font-medium text-sm sm:text-base">Gas Strand</p>
            <p className="text-sm sm:text-base">2020 - 2021</p>
          </div>

          {/* Junior High School */}
          <div className={`${dark ? "border-2 border-blue-600" : "shadow-2xl"} ${bg} ${TextColor} p-4 rounded-xl shadow hover:scale-105 transition transform`}>
            <h2 className="font-semibold text-lg">Junior High School</h2>
            <p className="text-sm sm:text-base">Holy Rosary Academy</p>
            <p className="text-sm sm:text-base">2015 - 2019</p>
          </div>

          {/* Elementary */}
         <div className={`${dark ? "border-2 border-blue-600" : "shadow-2xl"} ${bg} ${TextColor} p-4 rounded-xl shadow hover:scale-105 transition transform`}>
            <h2 className="font-semibold text-lg">Elementary</h2>
             <p className="text-sm sm:text-base">Libertad Elementary School</p>
            <p className="text-sm sm:text-base">2011 - 2015</p>
          </div>

        </div>
      </div>
  
    </section>
  )
}

export default Education_profile
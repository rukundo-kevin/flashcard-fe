import React from "react";

const Flashcard = ({id, question, title, createdBy}) =>{

    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
          <a
            href={`${id}`}
            className="c-card block border-gray-300 bg-white border p-2  border-solid shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          >
            {title}
            <div className="relative p-8 overflow-hidden">
                {question}
            </div>
            <div className="p-4 flex items-center text-sm text-gray-600">
                <a
                  className="w-1/2  text-center text-blue  border border-solid border-blue rounded py-2 px-1 hover:bg-blue-400 hover:text-white transition-colors duration-200"
                  href={`feedback/${id}`}
                >
                  View Answer
                </a>
            </div>
          </a>
        </div>
      );
}

export default Flashcard;

import Sidebar from "./Sidebar"

function QuizLayout({children}) {
    return (
        <>
         <Sidebar />
         {children}
        </>
    )
}

export default QuizLayout
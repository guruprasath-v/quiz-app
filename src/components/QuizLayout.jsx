import Sidebar from "./Sidebar"

function QuizLayout({children}) {
    return (
        <>
         <Sidebar />
         <div style={{marginLeft: '18vw'}}>
            {children}
         </div>
        </>
    )
}

export default QuizLayout
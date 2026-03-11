import Card from "./Card"

function Tours({courses}){
  let allCourses=[];
  const getcourses=() => {
   object.value(courses).forEach((coursesCategory) => {
    coursesCategory.forEach((courses) => {
      allCourses.push(course);
    }
  )

   })
  

return allCourses;
  };
  return(
    <div className="container">
    <div>
      <h1 className="titlewhat">go with ashutosh</h1>

    </div>
    <div className="cards">
      {
        getcourses().map((course)=> {
          return <Card course={courses} 
          key={tour.id}
          {...tour} removetours={removetours}></Card>

        })
      }

    </div>
    </div>
  )
}


export default Tours;
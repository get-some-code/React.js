
function Card({children, title, color = 'blue'}) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function Container({children, layout = "vertical"}) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };

  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}

function ChildrenProps() {
  return (
    <section className='p-8 bg-white rounded-xl shadow-xl'>
      <h2>Children prop</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod veritatis saepe minima modi aliquam earum ipsum, velit fuga quam corporis iusto provident nisi quasi.</p>
      <div className="space-y-6">
        <div>
          <h3>
            Card Component with Children
            <Container layout="grid">
              <Card></Card>
            </Container>
          </h3>
        </div>
      </div>
      </section>
  )
}

export default ChildrenProps
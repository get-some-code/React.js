import { useState } from "react";

function Card({ children, title, color = 'blue' }) {
  const colorClasses = {
    blue: "border-blue-500 bg-gradient-to-br from-blue-500 to-blue-400 text-white",
    green: "border-green-500 bg-gradient-to-br from-green-600 to-green-500 text-white",
    purple: "border-purple-500 bg-gradient-to-br from-purple-500 to-purple-400 text-white",
    red: "border-red-500 bg-gradient-to-br from-red-500 to-red-400 text-white",
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-lg bg-opacity-95 transition-transform duration-300 transform hover:-translate-y-1`}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-white/90 opacity-90" />
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-6 w-full",
    horizontal: "flex flex-row flex-wrap gap-4 w-full",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  const initialUsers = [
    {
      id: 1,
      name: "Jane Foster",
      email: "janef@gmail.com",
      role: "COO",
      avatar:
        "https://cdn.britannica.com/86/255786-050-5A8D7B3A/actress-natalie-portman-attends-christian-dior-haute-couture-paris-fashion-week.jpg",
      followers: 1305,
      following: 180,
      isFollowing: false,
      color: "blue",
    },
    {
      id: 2,
      name: "Steve Rogers",
      email: "steve.rogers@gmail.com",
      role: "CEO",
      avatar: "https://i.cdn.newsbytesapp.com/images/l33020250811140530.jpeg",
      followers: 9658,
      following: 420,
      isFollowing: false,
      color: "purple",
    },
    {
      id: 3,
      name: "Tony Stark",
      email: "tonystark3000@gmail.com",
      role: "CTO",
      avatar: "https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
      followers: 2425,
      following: 11,
      isFollowing: false,
      color: "green",
    },
    {
      id: 4,
      name: "Peter Parker",
      email: "pete.parker@gmail.com",
      role: "Jr. Intern",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9ysKp3ztIiYfM38bqE8tkyztOvjbCkXiVQ&s",
      followers: 1520,
      following: 290,
      isFollowing: false,
      color: "red",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [hoveredId, setHoveredId] = useState(null);

  function toggleFollow(id) {
    setUsers(prev =>
      prev.map(u => {
        if (u.id !== id) return u;
        const isFollowing = !u.isFollowing;
        const followers = isFollowing ? u.followers + 1 : Math.max(0, u.followers - 1);
        return { ...u, isFollowing, followers };
      })
    );
  }

  return (
    <section className="p-8 bg-white/90 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(2,6,23,0.16)]">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Children props
      </h2>

      <div className="max-w-6xl mx-auto bg-gray-50 p-6 rounded-xl shadow-inner text-center mb-8">
        <p className="text-gray-800 leading-relaxed mb-8 max-w-6xl mx-auto
              text-lg tracking-wide opacity-100
              bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl
              shadow-inner ring-1 ring-gray-100 text-left
              sm:text-left transition-all duration-400">

          In React, the <strong>children prop</strong> allows a component to receive and render any JSX passed between its opening and closing tags.
          Instead of a component deciding its own content, the parent can inject layouts, elements, or entire UI blocks inside it.
          This makes components far more flexible, reusable, and capable of handling complex interface patterns.

          <br /><br />

          In this project, the reusable <strong>Card</strong> component demonstrates how the children prop works.
          Every user profile card is created using the same Card component, but each card contains different details because the
          parent passes custom JSX as children. This allows each card to render unique content such as user information, images,
          buttons, and follower statistics, all while reusing the same layout container.

          <br /><br />
          For example, inside each Card we pass JSX that includes:

          <br />
          • <strong class="text-blue-600">name, email, and role</strong> displayed using normal text elements. <br />
          • a <strong class="text-blue-600">profile image</strong> that is styled as a rounded avatar. <br />
          • a dynamic <strong class="text-blue-600">Follow / Following / Unfollow</strong> button that updates the UI based on user interaction. <br />
          • <strong class="text-blue-600">follower and following counts</strong> rendered as structured elements inside the card.

          <br /><br />

          When a user presses the Follow button, the parent component updates that user's follower count and follow status
          inside the shared <strong>users</strong> state. React then re-renders only the card that changed.
          Clicking again switches to Unfollow and decreases the follower count.
          This shows how <strong>children</strong> (which control layout and structure inside the Card) and
          <strong> state</strong> (which tracks changes between renders) work together to make reusable components interactive.

          <br /><br />

          Altogether, the Children Props section demonstrates how passing JSX through the children prop enables you to create flexible,
          customizable components that can display completely different UI structures while sharing the same underlying component logic.
        </p>

      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
        Card Component with Children
      </h3>

      <Container layout="grid">
        {users.map(user => (
          <Card key={user.id} title="User Profile" color={user.color}>
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 space-y-3 text-left">
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Name:</strong>
                  <span className="text-white"> {user.name}</span>
                </p>
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Email:</strong>
                  <span className="text-white"> {user.email}</span>
                </p>
                <p className="flex items-center gap-4">
                  <strong className="inline-block w-20 text-gray-100">Role:</strong>
                  <span className="text-white"> {user.role}</span>
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full bg-white/20 text-white font-medium hover:bg-white/30 transition-all duration-200 shadow-sm">
                    Message
                  </button>

                  <button
                    onClick={() => toggleFollow(user.id)}
                    onMouseEnter={() => setHoveredId(user.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={
                      user.isFollowing
                        ? `${hoveredId === user.id ? 'bg-red-500 text-white' : 'bg-white text-blue-600'} px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow`
                        : 'bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:brightness-95 transition-all duration-200 shadow'
                    }
                  >
                    {user.isFollowing ? (hoveredId === user.id ? 'Unfollow' : 'Following') : 'Follow'}
                  </button>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center gap-4">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white/40"
                />
                <div className="flex items-center gap-6 bg-white/10 px-4 py-2 rounded-full shadow-inner">
                  <div className="text-center">
                    <div className="text-sm font-semibold">{user.followers}</div>
                    <div className="text-xs text-white/80">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{user.following}</div>
                    <div className="text-xs text-white/80">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </section>
  );
}

export default ChildrenProps;

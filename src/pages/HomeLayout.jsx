import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <section className="mainPage">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

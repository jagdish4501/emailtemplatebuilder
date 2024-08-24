import ProfileDropdown from "./dropdown";

const HomePage: React.FC = () => {
  return (
    <ProfileDropdown
      profileImage="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png"
      name="John Doe"
      email="john.doe@example.com"
    />
  );
};

export default HomePage;

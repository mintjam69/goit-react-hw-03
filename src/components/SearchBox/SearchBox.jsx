import s from "./SearchBox.module.css";

const SearchBox = ({ setSearchUser }) => {
  const handleSearchUser = (event) => {
    setSearchUser(event.target.value.toLowerCase());
  };
  return (
    <div className={s.serchWrap}>
      <label>
        Find contact by name
        <input
          className={s.serchInput}
          type="text"
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;

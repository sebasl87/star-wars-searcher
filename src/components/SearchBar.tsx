interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search for a character..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      padding: "8px",
      width: "100%",
      marginBottom: "16px",
      borderRadius: "8px",
      border: "2px solid yellow",
      outline: "none",
      fontSize: "16px",
    }}
  />
);

export default SearchBar;

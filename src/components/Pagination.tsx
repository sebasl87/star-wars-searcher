import { ApiResponse } from "@/service";
import { styles } from "@/styles/theme";

interface PaginationProps {
  handlePreviousPage: () => void;
  data: ApiResponse | undefined;
  isFetching: boolean;
  page: number;
  handleNextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  handlePreviousPage,
  data,
  isFetching,
  page,
  handleNextPage,
}) => (
  <div style={{ paddingLeft: "40px", marginTop: "24px" }}>
    <div style={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={!data?.previous || isFetching}
        style={{
          backgroundColor: "black",
          color: "yellow",
          border: "1px solid yellow",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          opacity: !data?.previous || isFetching ? 0.5 : 1,
        }}
      >
        Previous
      </button>
      <span style={{ margin: "0 16px", color: "yellow" }}>Page {page}</span>
      <button
        onClick={handleNextPage}
        disabled={!data?.next || isFetching}
        style={{
          backgroundColor: "black",
          color: "yellow",
          border: "1px solid yellow",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          opacity: !data?.next || isFetching ? 0.5 : 1,
        }}
      >
        Next
      </button>
    </div>
  </div>
);

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
  <div style={styles.pagination}>
    <button
      onClick={handlePreviousPage}
      disabled={!data?.previous || isFetching}
    >
      Previous
    </button>
    <span>Page {page}</span>
    <button onClick={handleNextPage} disabled={!data?.next || isFetching}>
      Next
    </button>
  </div>
);

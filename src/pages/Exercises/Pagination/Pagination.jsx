import { SpanPagination, WrapperPaginate } from './Pagination.styled';

const Pagination = ({ exePerPage, totalExe, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalExe / exePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <WrapperPaginate>
      {pageNumbers.map(number => (
        <div key={number}>
          <SpanPagination
            href="#"
            onClick={() => paginate(number)}
            isactive={number === currentPage ? 1 : 0}
          />
        </div>
      ))}
    </WrapperPaginate>
  );
};

export default Pagination;

import Row from "../Row/Row";
import Requested from "../../../Utils/Requested";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={Requested.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row
        title="TOP RATE MOVIES"
        fetchurl={Requested.fetchNetflixOrginals}
      />
      <Row 
        title="ACTION MOVIES"
        fetchurl={Requested.fetchActionMovies}
      />
      <Row
        title="COMEDY MOVIES"
        fetchurl={Requested.fetchComedyMovies}
      />

      <Row
        title="HORROR MOVIES"
        fetchurl={Requested.fetchHorrorMovies}
      />

      <Row
        title="ROMANCE MOVIES"
        fetchurl={Requested.fetchRomanceMovies}
      />

      <Row
        title="DOCUMENTARIES MOVIES"
        fetchurl={Requested.fetchiDocumentaries}
      />

      <Row
        title="TV SHOW"
        fetchurl={Requested.fetchTvShow}
      />

    </>
  );
}

export default RowList


//   
//   
//   
//   
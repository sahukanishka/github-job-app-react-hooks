import './App.css';
import useFetchJobs from './useFetchJobs' 
import {Container} from "react-bootstrap"
import { useState } from 'react';
import Job from "./job";
import SearchBar from "./searchbar";
function App() {
  const [params,setparams] = useState({})
  const [page,setPage] = useState(1)

  const {jobs,loading,error} = useFetchJobs(params,page)
  return (
  <Container>
    <SearchBar/>
    {loading && <h2>Loading...</h2>}
    {error && <h2>Error..!</h2>}
    {jobs.map(job => {
      return <Job key={job.id} job={job}/>
    })}
    </Container>
  );
}

export default App;

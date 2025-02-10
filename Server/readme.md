# Goa API  

**Base URL:** [`https://goa-api.onrender.com/`](https://goa-api.onrender.com/)  

## Query Parameters  

- **`sort`** - Sorts the results.  
  - Accepted values: `"asc"`, `"ASC"`, `"desc"`, `"DESC"`  
- **`limit`** - Limits the number of results returned.  
  - Accepted value: Any positive number  

## Endpoints  

### Mentors  

- **`GET /mentors`** - Retrieve all mentors  
- **`GET /mentors/:id`** - Retrieve a single mentor by ID  

### Leaders  

- **`GET /leaders`** - Retrieve all leaders  
- **`GET /leaders/salary`** - Retrieve leaders along with their salaries  
- **`GET /leaders/members`** - Retrieve leaders with their squad member count  
- **`GET /leaders/:id`** - Retrieve a single leader by ID  

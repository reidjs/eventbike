//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/util/session_api_util.js
export const login = user => {
  return (
    $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  }));
};

export const signup = user => {
  console.log(user)
  return (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
)};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
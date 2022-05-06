import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.min.css'
import { Button, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from "react-paginate";

// import { Card, Col, Row } from 'antd';
// import { Card, Row, Col, Container } from "react-bootstrap";

const UserData = (props) => {

    const [users, fetchUsers] = useState([])

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;


    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                fetchUsers(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate();

    const fetchById = (id) => {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                fetchUsers(res)
                navigate('/Display', { state: { res } });

            })
        // navigate('/Display', { state: { res } });
    }

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className="card">
                    <div><b><h5>{user.title}</h5></b></div>
                    <div class="content"><Tooltip>{user.body}</Tooltip></div>
                    <div class="viewBtn"><Button type="primary" onClick={() => fetchById(user.id)}>View More</Button></div>
                </div>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div>
            {/* <div>
                {users.map((item, i) => {
                    return <div key={i} class="card">
                        <div><b><h5>{item.title}</h5></b></div>
                        <div><Tooltip>{item.body}</Tooltip></div>
                        <div class="viewBtn"><Button type="primary" onClick={() => fetchById(item.id)}>View More</Button></div>
                    </div>

                })}
            </div> */}


            {displayUsers}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />


            {/* <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={6}>
                        {users.map((item, i) => {
                            return <div key={i}>
                                <Card title={item.title}>{item.body}</Card>
                            </div>
                        })}
                    </Col>
                </Row>
                
            </div> */}

            {/* <Container>
                <Row>
                    {users.map((users, k) => (
                        <Col key={k} xs={12} md={4} lg={3}>
                            <Card >
                                

                                <Card.Body>
                                    <Card.Title>{users.title}</Card.Title>
                                    <Card.Text>{users.body}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container> */}
        </div>
    )
}

export default UserData;
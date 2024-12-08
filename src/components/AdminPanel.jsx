import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ThemeContext } from "../ModeContext/Mode";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "../style/adminPanel.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogData, setBlogData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    date: "",
  });
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtneGd6eWJ6cmtucHZlZXR4YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzUxNDMsImV4cCI6MjA0NDE1MTE0M30.c0Kyapgbmrxify5PPgZUKhM7HPKNzTt6cfHoRdDP1T8";
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/blog?select=*",
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log("Fetched blogs:", response.data); 

      if (Array.isArray(response.data)) {
        setBlogs(response.data);
      } else {
        console.error("Response data is not an array:", response.data);
        setBlogs([]); 
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const saveBlog = async () => {
  try {
    if (editMode && selectedBlog && selectedBlog.id) {
      await axios.patch(
        `https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/blog?id=eq.${selectedBlog.id}`,
        blogData,
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updatedBlogs = blogs.map((blog) =>
        blog.id === selectedBlog.id ? { ...blog, ...blogData } : blog
      );
      setBlogs(updatedBlogs);
<<<<<<< HEAD
      toast.success("Blog uğurla yeniləndi");
=======
      toast.success("Blog updated successfully");
>>>>>>> 10b8272 (sort and filter added)
    } else {
      const currentDate = new Date().toISOString();
      const blogWithDate = { ...blogData, date: currentDate };

      const response = await axios.post(
        "https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/blog",
        blogWithDate,
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.length > 0) {
        setBlogs([...blogs, response.data[0]]);
      } else {
<<<<<<< HEAD
        toast.success("Yeni blog əlavə edildi");
=======
        toast.success("New blog added");
>>>>>>> 10b8272 (sort and filter added)
      }
    }

    handleClose();
    setBlogData({
      image: "",
      title: "",
      author: "",
      description: "",
      date: "",
    });
    setEditMode(false);
    setSelectedBlog(null); 
    fetchBlogs();
  } catch (error) {
<<<<<<< HEAD
    console.error("Blogu saxlarkən xəta baş verdi:", error);
    toast.error("Blogu saxlarkən xəta baş verdi");
=======
    console.error("An error occurred while saving the blog:", error);
    toast.error("An error occurred while saving the blog");
>>>>>>> 10b8272 (sort and filter added)
  }
};


  const handleDelete = async (id) => {
    if (!id) {
      console.error("Blog ID is missing");
      return;
    }

    try {
      await axios.delete(
        `https://kgxgzybzrknpveetxbkq.supabase.co/rest/v1/blog?id=eq.${id}`,
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      toast.success("Delete Blog");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleEdit = (blog) => {
    setBlogData({
      image: blog.image || "",
      title: blog.title || "",
      author: blog.author || "",
      description: blog.description || "",
      date: blog.date || "",
    });
    setSelectedBlog(blog);
    setEditMode(true);
    handleShow();
  };

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <Container
      fluid
      className={`adminPanel ${isDarkMode ? "dark-mode" : "light-mode"} p-5`}
    >
      <h1 className="text-white dashboard">{t("Dashboard")}</h1>
      <Button
        variant="danger"
        className="mb-3"
        onClick={() => {
          setEditMode(false);
          handleShow();
        }}
      >
        {t("New Blog")}
      </Button>

      <Button variant="danger" className="mb-3 ms-2" onClick={handleLogout}>
        {t("Logout")}
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(blogs) && blogs?.length > 0 ? (
            blogs?.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>
                  <img src={blog.image} style={{ width: "100px" }} alt="Blog" />
                </td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.description}</td>
                <td>{new Date(blog.date).toLocaleDateString()}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button variant="danger" onClick={() => handleEdit(blog)}>
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No blogs available</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Blog" : "Add New Blog"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formImageUrl">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={blogData.image}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={blogData.author}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={blogData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveBlog}>
            {editMode ? "Update Blog" : "Add Blog"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPanel;
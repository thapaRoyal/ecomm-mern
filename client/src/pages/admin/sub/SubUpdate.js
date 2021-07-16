import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getSub, updateSub } from "../../../functions/sub";
import { getCategories } from "../../../functions/category";

import { LoadingOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";

const SubUpdate = ({ match, history }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [parent, setParent] = useState("");

  useEffect(() => {
    loadCategories();
    loadSub();
  }, []);

  const loadCategories = () =>
    getCategories().then((cat) => setCategories(cat.data));

  const loadSub = () =>
    getSub(match.params.slug).then((sub) => {
      setName(sub.data.name);
      setParent(sub.data.parent);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    updateSub(match.params.slug, { name, parent }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated`);
        history.push("/admin/sub");
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
        setName("");
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <LoadingOutlined className="h1" />
          ) : (
            <h4>Update Sub Category</h4>
          )}

          <div className="form-group">
            <select
              name="category"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Select a category</option>
              {categories.length > 0 &&
                categories.map((cat) => (
                  <option
                    key={cat._id}
                    value={cat._id}
                    selected={cat._id === parent}
                  >
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </div>
  );
};

export default SubUpdate;

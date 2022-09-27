import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FileUpload() {

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('http://localhost:4500/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            console.log(res.data.name);
            const path= 'http://localhost:4500/' + res.data.path
            window.localStorage.setItem("resume_path",path);

            /*let file_data = {	
                vedio_path: 'http://localhost:4500' +res.data.path,
                vedio_filename: res.data.name ,
                vedio_desc: "abcd",
                vedio_notes: "abc",
                vedio_notes_filepath: "abcd"};
          fetch('https://localhost:44387/api/Vedios/', {
			method: 'POST',
			headers : {'Content-Type': 'application/json', 'charset': 'utf-8'},
			body: JSON.stringify(file_data)
            }).then(response => {
                this.setState({msg: "File successfully uploaded"});
            }).catch(err => {
                this.setState({error: err});
            });*/
            getFile({ name: res.data.name,
                     path: 'http://localhost:4500/' + res.data.path
                   })
        }).catch(err => console.log(err))}

    return (
        <div>
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />
                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
                <Link onClick={uploadFile} className="upbutton" to="#">
                <button className='btn btn-primary'>Upload</button>   
                </Link>
            <hr />
            {/* displaying received image*/}
            {/* {data.path && <img src={data.path} alt={data.name} />} */}
       
           
            </div>
        </div>
    );
}

export default FileUpload;
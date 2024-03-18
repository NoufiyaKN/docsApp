import { Box, Button, Grid, Modal, Typography, TextField, styled, Paper, CardContent, CardActions, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function View() {

  const [docTitle,setDocTitle] = useState("")
  const [allDocs,setAllDocs] = useState([])
  const [reload,setReaload] = useState('')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const docsCollectionRef = collection(db,'documents')

  const getAllDocs = async()=>{
    const docsData = await getDocs(docsCollectionRef)
    const data = docsData.docs.map(doc =>(
      {
        ...doc.data(),
        id:doc.id
      }
    ))
    setAllDocs(data)
  }

  const postData = async()=>{
    await addDoc(docsCollectionRef,{
      title:docTitle,
      discription:""
    })
    setReaload(docTitle)
  }

  useEffect(()=>{
    getAllDocs()
  },[reload])

  const handleAdd = () =>{
    postData()
    alert(`Document ${docTitle} added successfully`)
    setOpen(false);
  } 

  const navigate = useNavigate()

  const handleEdit = (data) =>{
    navigate('/textEditorView',{state:data})
  }

  const handleChange =(e)=>{
    setDocTitle(e)
  }

  const deleleDocs = async(id)=>{
    const oneDoc = doc(db,'documents',id)
    await deleteDoc(oneDoc)
    setReaload(id)
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ minHeight: '10vh', marginTop: '15px' }}
      >
        <Grid item xs={3}>
          <Button onClick={handleOpen} variant="outlined"><i className='fa-solid fa-plus'></i>Add A Document</Button>
        </Grid>
      </Grid>

<h2>All documents</h2>
<Box style={{marginTop: '15px'}} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        {allDocs?.length > 0 && allDocs.map((item) => (
            <Grid item xs={4} key={item.id}>
                <Item style={{background: 'none',boxShadow: 'none'}}>
                    <Card sx={{ minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <Box sx={{ width: '100%' }}>
                                    <CardActions>{item.title}</CardActions>
                                    <Box sx={{ width: '100%'}}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={6}>
                                                <Item style={{background: 'none',boxShadow: 'none',marginTop: '-40px',marginLeft: '275px'}}>
                                                    <Button onClick={()=>handleEdit(item)} size="small"><i style={{color: 'gray'}} className="fa-solid fa-pencil"></i></Button>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Item style={{background: 'none',boxShadow: 'none',marginTop: '-40px',marginLeft: '100px'}}>
                                                    <Button onClick={()=>deleleDocs(item.id)}size="small"><i style={{color: 'gray'}} className="fa-solid fa-trash"></i></Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Typography>
                            <Typography>
                                <CardActions>
                                    <p size="small" style={{textAlign: 'justify'}}>{item.discription.replace(/<[^>]+>/g, '')}</p>
                                </CardActions>
                            </Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
        ))}
    </Grid>
</Box>

      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField size='small' style={{width: '100%'}} id="outlined-basic" label="Add Title" variant="outlined" onChange={(e)=>handleChange(e.target.value)}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ marginTop: '15px' }}>
          <Button size='small' variant="outlined" onClick={handleAdd}>Add</Button>
        </Grid>          
        </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default View
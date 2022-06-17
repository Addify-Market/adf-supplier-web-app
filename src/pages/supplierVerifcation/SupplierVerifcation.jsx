import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SupplierVerifcation() {
    
  return (
    <div>
        <Container maxWidth="sm" style={{marginTop:'80px'}}>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Accounts Verification
                </Typography>
                <Typography variant="h5" component="div">
                 Creating Your Addons
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 Please Pay $1 equivalent ether to verify your accounts.
                </Typography>
                <Typography variant="body2">
                This is one time fee. once you are verified, you can create UNLIMITED addons.
                <br />
                {'"Please note, this is just to make the marketplace clean, so that your addons won`t get lost in fakes'}
                </Typography>
            </CardContent>
        <CardActions>
            <Button size="small">Verify Account</Button>
        </CardActions>
        </Card>
        </Container>
    </div>
  )
}

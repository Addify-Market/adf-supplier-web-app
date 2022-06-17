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
                    Creating your addon
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Please pay an amount equivalent to $ 1 to verify your account.
                </Typography>
                <Typography variant="body2">
                This is an one-time fee. Once you are verified, you can create UNLIMITED addons without any further charge.
                <br />
                {'"Please note, the verification fee is charged to ensure the authenticity of the marketplace and levitate your product`s value.'}
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

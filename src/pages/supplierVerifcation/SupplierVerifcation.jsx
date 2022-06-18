import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

export default function SupplierVerifcation() {
  let navigate = useNavigate();
  const verifyAccount = async () => {
    await window.ethereum.send("eth_requestAccounts");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletId = await signer.getAddress();
    const transaction = await signer.sendTransaction({
      from: walletId,
      to: "0xC677E79Eaaf43a130dE1240963a4c770AB51AD96",
      value: 1119819326019300
    });
    console.log(transaction);
    localStorage.setItem("verified", transaction.hash);
    navigate("/supplier/create");
  };
  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "80px" }}>
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Accounts Verification
            </Typography>
            <Typography variant="h5" component="div">
              Verify Your Account
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Please pay an amount equivalent to <b>$1</b> to verify your
              account.
            </Typography>
            <Typography variant="body2">
              <b>This is an one-time fee.</b> Once you are verified, you can
              create <b>UNLIMITED</b> addons without any further charge.
              <br />
              <p>
                Please note, the verification fee is charged to ensure the
                authenticity of the marketplace and levitate your product's
                value.
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={verifyAccount}>
              Verify Account
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

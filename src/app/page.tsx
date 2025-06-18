"use client";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          padding: { xs: 2, md: "16px", textAlign: "center" },
          margin: { xs: 0, md: "50px 100px" },
          fontFamily: "Poppins",
        }}
      >
        The Rick and Morty API
      </Typography>

      <Typography
        variant="body1"
        sx={{
          padding: 5,
          fontFamily: "Poppins",
          margin: { xs: 0, md: "0 100px" },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum
        hic repudiandae autem beatae vitae eos nam ex maiores esse quod
        doloribus quidem dolorem fuga omnis cumque molestias alias laborum.
        Nostrum ex cumque harum perspiciatis doloribus repudiandae pariatur
        voluptas molestias, facere amet. Molestiae, quas modi! Inventore
        repudiandae dolor soluta et. Aliquid odio, quae id incidunt omnis veniam
        nam ipsa? Aut. Nisi nostrum quis totam dolore neque obcaecati molestiae
        dignissimos accusamus, illum, ut est quasi laborum quibusdam impedit
        minus voluptate quo reiciendis ipsa ratione consectetur? Dolores omnis
        eveniet pariatur autem molestiae. Blanditiis nemo commodi veritatis
        expedita? Unde fugiat dolore numquam culpa incidunt quae quasi
        repudiandae dolorum, magnam repellat facere, sequi quas? Eveniet error
        exercitationem nisi impedit voluptatibus provident assumenda architecto
        ipsam! Animi explicabo maiores odit vero, veniam quibusdam enim quis
        dicta qui inventore error eius saepe possimus, porro quam reprehenderit.
        Tempora hic doloribus rerum optio tenetur, officia at quis illo
        recusandae.
      </Typography>
    </>
  );
}

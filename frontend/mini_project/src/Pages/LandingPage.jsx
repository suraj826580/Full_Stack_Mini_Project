import React from "react";
import Navbar from "./Navbar/Navbar";
import BottomImage_of_Nav from "./BottomImage_of_Nav";
import GenericGrid from "./GenericGrid/GenericGrid";

const array = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/1gE8vjmrdappVxvdzuhR1N/a9f506d81095f58a6178c93e96c22d46/490997712-041723_hpg_ls_m1a.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/3IDL4kjJDzwjiw1awlEHFT/df087658a55a6964529cc6927009407a/490997716-041723_hpg_ls_m1b.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/nlM9hb65CqWKn23TpRfLX/d51ca3f71298d10a3ae820776692a1ac/490997718-041723_hpg_ls_m1c.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/20DgCU187SMwv7qPP75S7U/1ff5e5b96dc30e2d43fdb241bd3d6116/490997724-041723_hpg_ls_m2a.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/3nSeV0vzClluhaYUgnR8FU/2a6d774c01d09ea8152baea8ab2eb3fe/490997732-041723_hpg_ls_m2b.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/27EjWuf34YNvW7QTgTnGjQ/031ecb2400b5e3768e3750f2ca6efe20/490997740-041723_hpg_ls_m2c.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/1m7FZoDE5wLhiZ2E0j30xV/472ca3250f997d3babdeef7a3347468b/490997742-041723_hpg_ls_m3a.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/2c3XQVfVHEkQdIeCcz6WMQ/dd75d0747a41399848ab2a7e44d5c381/490997747-041723_hpg_ls_m3b.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/2I18ePsR5UIi9TAwmeT0ye/6802c015fd473b697887638fe595c544/490997750-041723_hpg_ls_m3c.jpg?w=856&q=80&fm=webp",
  },
];

const array2 = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/78SzWCz9SK4KE4qsNgeXco/8545b3f544ca3c20d038c2e9bf8f9d5d/490997838-041723_hpg_ls_m5a.jpg?w=1330&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/3Fi1Gq7uONkkeLVbWJq5NO/998b8553e1eb735d12398861bc4b478a/490997889-041723_hpg_ls_m5b.jpg?w=1330&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4JyCMFneaFDc1PZaoZCnIm/f62be68b0b47d1a193e795f3e895b177/490998112-041723_hpg_mte_3.jpg?w=856&q=80&fm=webp",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/1LmT0kDfvz1n0ROv0KnvDG/ad55dfb9fdbcc42c047832060bc11bb5/490998108-041723_hpg_mte_2.jpg?w=856&q=80&fm=webp",
  },
];

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <BottomImage_of_Nav src="https://images.ctfassets.net/5de70he6op10/3TY3zV2JW7I5Lpr7x0VMaV/7ad6f02e6ce5f1886cbc4f03658e8864/042023_DecoratingEvent_HPGSecondaryBanner_LS_EndsSoon.jpg?w=2882&q=80&fm=webp" />
      <GenericGrid array={array} column={4} />
      <BottomImage_of_Nav src="https://images.ctfassets.net/5de70he6op10/4Jh3BP8MvaIFxDN67RCEbd/f74d375d5f871c04efef6f7c4bae15b5/490997785-041723_hpg_ls_m4.jpg?w=2641&q=80&fm=webp" />
      <GenericGrid array={array2} column={6} />
    </>
  );
}

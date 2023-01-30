import React from 'react';
import type { Theme } from '@libs/theme';

const gitHubIcon = (
  <svg width='25' height='30' viewBox='0 0 25 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.2378 25.4502L17.2378 25.4505C17.2334 25.6184 17.2554 25.7741 17.2946 25.9175C15.845 26.3846 14.2501 26.4852 12.7914 26.4017C11.4834 26.3268 10.3097 26.1055 9.48715 25.8866C9.52147 25.7511 9.54013 25.6049 9.53611 25.4485L9.5361 25.4482C9.52399 24.988 9.52817 24.3178 9.53276 23.5804C9.534 23.3813 9.53528 23.1773 9.53627 22.9712L9.53902 22.3975L8.97032 22.4732C8.24461 22.5698 7.3891 22.6736 6.93256 22.6736C5.93754 22.6736 5.22703 22.499 4.70029 22.2412C4.1765 21.9848 3.80576 21.6322 3.50881 21.2309C3.21653 20.8359 3.00112 20.403 2.77575 19.9501C2.76693 19.9324 2.75809 19.9146 2.74923 19.8968C2.52431 19.4451 2.27552 18.9499 1.92629 18.5617L1.9262 18.5617C1.61249 18.2132 1.22787 17.9715 0.959766 17.803C0.940886 17.7911 0.922583 17.7796 0.904925 17.7685C0.818366 17.7138 0.752693 17.6712 0.702669 17.6359C0.757076 17.606 0.863079 17.5695 1.04709 17.5695C1.76917 17.5695 2.60944 18.0912 3.01583 18.7279C3.27853 19.1396 3.76581 19.7889 4.42998 20.3409C5.09188 20.891 5.97309 21.3798 7.01033 21.3798C7.83453 21.3798 8.67269 21.1231 9.23586 20.9292L9.5268 20.8291L9.5685 20.5242C9.64663 19.9529 9.86465 19.4658 10.0683 19.1173C10.1694 18.9442 10.2649 18.8088 10.3337 18.7184C10.368 18.6733 10.3954 18.6397 10.4132 18.6185C10.4221 18.6079 10.4286 18.6004 10.4323 18.5962L10.4348 18.5934L10.435 18.5932L10.4351 18.593L10.4354 18.5927L10.4357 18.5923L10.4358 18.5922L11.2112 17.7435L10.0608 17.7562C10.0609 17.7562 10.0608 17.7562 10.0607 17.7562L10.0605 17.7562L10.0601 17.7562L10.0584 17.7562L10.0453 17.7562C10.0329 17.7561 10.0132 17.7559 9.98667 17.7553C9.93363 17.754 9.85344 17.7511 9.75 17.7446C9.54294 17.7316 9.24376 17.7039 8.88339 17.6457C8.16028 17.5287 7.20375 17.2904 6.2532 16.8083C5.30507 16.3274 4.36988 15.6078 3.67014 14.5276C2.97183 13.4497 2.48844 11.9827 2.48844 9.9737C2.48844 8.4516 2.89714 7.30371 3.29941 6.54093C3.50092 6.15882 3.70111 5.87293 3.84797 5.68547C3.92135 5.5918 3.98124 5.52293 4.02106 5.47915C4.04097 5.45727 4.05583 5.44169 4.06483 5.43243L4.07381 5.42332C4.07408 5.42305 4.0743 5.42283 4.07446 5.42267C4.07464 5.42249 4.07475 5.42238 4.07479 5.42234C4.07481 5.42233 4.07481 5.42233 4.07479 5.42234L4.28418 5.21995L4.2093 4.93671L4.20929 4.93665L4.20928 4.93662L4.20923 4.93645L4.20902 4.93562L4.20754 4.92991L4.20109 4.90435C4.19532 4.8812 4.18676 4.84605 4.17614 4.80024C4.15487 4.70855 4.12543 4.57447 4.09365 4.40846C4.0299 4.07547 3.95768 3.61895 3.92229 3.12145C3.88675 2.62167 3.88953 2.09564 3.9683 1.61862C4.03254 1.22957 4.14308 0.898948 4.30335 0.643409C4.52625 0.650149 4.79637 0.696758 5.10682 0.783628C5.51495 0.897834 5.95988 1.07209 6.4061 1.27609C7.29853 1.6841 8.15789 2.19335 8.67548 2.51967L8.8906 2.6553L9.12605 2.56166L9.12618 2.56161L9.12647 2.56149L9.12667 2.56141L9.12691 2.56131L9.12759 2.56105L9.13787 2.55714C9.14788 2.55336 9.16423 2.54731 9.18675 2.53931C9.23181 2.52329 9.30158 2.49946 9.395 2.47037C9.58184 2.4122 9.86308 2.33305 10.23 2.25339C10.964 2.09406 12.04 1.93284 13.389 1.93284C14.738 1.93284 15.8134 2.09406 16.5468 2.25338C16.9135 2.33303 17.1945 2.41217 17.3811 2.47033C17.4744 2.49941 17.5441 2.52324 17.5891 2.53925C17.6116 2.54725 17.6279 2.5533 17.6379 2.55707L17.6481 2.56098L17.6488 2.56124L17.6491 2.56133L17.6493 2.56141L17.6495 2.56153L17.6497 2.56158L17.8853 2.65542L18.1006 2.51955C18.6175 2.19334 19.4769 1.68411 20.3694 1.27611C20.8157 1.07211 21.2607 0.897844 21.6689 0.783635C21.9795 0.69676 22.2496 0.650148 22.4726 0.643409C22.6328 0.898948 22.7434 1.22957 22.8076 1.61862C22.8864 2.09564 22.8892 2.62167 22.8536 3.12145C22.8182 3.61895 22.746 4.07547 22.6823 4.40846C22.6505 4.57447 22.621 4.70855 22.5998 4.80024C22.5892 4.84605 22.5806 4.8812 22.5748 4.90435L22.5684 4.92991L22.5669 4.93562L22.5667 4.93645L22.5666 4.93662L22.5666 4.93665L22.5666 4.93671L22.4918 5.21957L22.7007 5.42193L22.7011 5.42234L22.7016 5.42276L22.7017 5.42291L22.7018 5.42303L22.7022 5.42334L22.7107 5.43204C22.7197 5.44131 22.7345 5.45692 22.7544 5.47883C22.7942 5.52266 22.854 5.59161 22.9273 5.68538C23.074 5.87304 23.274 6.15921 23.4753 6.5416C23.8772 7.30496 24.2854 8.45346 24.2854 9.97569C24.2854 11.9847 23.802 13.4517 23.1037 14.5296C22.404 15.6098 21.4688 16.3294 20.5207 16.8103C19.5701 17.2924 18.6136 17.5307 17.8905 17.6477C17.5301 17.7059 17.2309 17.7336 17.0239 17.7466C16.9204 17.7531 16.8402 17.756 16.7872 17.7572C16.7607 17.7579 16.741 17.7581 16.7286 17.7582L16.7155 17.7582L16.7138 17.7582L16.7133 17.7582L16.7132 17.7582L16.7131 17.7582L16.7131 17.7582L15.5585 17.7455L16.3389 18.5951L16.3392 18.5955L16.3393 18.5956L16.3396 18.5959L16.3398 18.5961L16.34 18.5964L16.3439 18.6008C16.3489 18.6065 16.3573 18.6162 16.3686 18.6297C16.3913 18.6569 16.4256 18.6995 16.4679 18.7563C16.5526 18.8702 16.6675 19.0393 16.7827 19.2532C17.0148 19.684 17.2376 20.277 17.2376 20.9593C17.2376 21.2263 17.2399 21.6196 17.2425 22.0703C17.2491 23.199 17.2578 24.6874 17.2378 25.4502ZM0.59528 17.5477C0.595478 17.5477 0.597249 17.5495 0.599996 17.5532C0.596456 17.5495 0.595082 17.5476 0.59528 17.5477Z'
      fill='black'
      stroke='black'
    />
  </svg>
);

const href = ``;

function GitHubLoginButton() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <a href={href}>
      <button
        css={(theme: Theme) => [
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            border: `2px solid #000000`,
            borderRadius: '50%',
            backgroundColor: theme.palette.paper,
          },
        ]}
      >
        {gitHubIcon}
      </button>
      <p
        css={{
          width: '60px',
          fontSize: '12px',
          fontWeight: '600',
          textAlign: 'center',
          marginTop: '8px',
        }}
      >
        깃허브
      </p>
    </a>
  );
}

export { GitHubLoginButton };

// src/components/introduction-card/index.tsx
import React from 'react';
import CONFIG from 'gitprofile.config';
import { skeleton } from '../../utils';

const ListItem = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{label}</div>
    <div className="mb-4 font-normal">{value}</div>
  </li>
);

const IntroductionCard: React.FC = () => {
  const { introduction } = CONFIG;

  if (!introduction) {
    return <div>Introduction data is not available.</div>;
  }

  const { name, title, description, contact } = introduction;

  const loading = false; // Set this to true if you want to show skeleton loading

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 3; index++) {
      array.push(
        <ListItem
          key={index}
          label={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          value={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Introduction</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                <ListItem label="Name" value={name} />
                <ListItem label="Description" value={<div dangerouslySetInnerHTML={{ __html: description }} />} />
                <ListItem label="Email" value={<a href={`mailto:${contact.email}`}>{contact.email}</a>} />
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;

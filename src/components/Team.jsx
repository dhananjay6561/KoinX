import React from 'react';

function TeamMember({ name, role, image, description }) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function Team() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Team</h3>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <TeamMember
        name="John Smith"
        role="Designation here"
        image="/john-smith.jpg"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
      <TeamMember
        name="Elina Williams"
        role="Designation here"
        image="/elina-williams.jpg"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
      <TeamMember
        name="John Smith"
        role="Designation here"
        image="/john-smith-2.jpg"
        description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
      />
    </div>
  );
}

export default Team;

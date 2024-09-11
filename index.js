import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 4000



let fantasy = [
    {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
    category: "fantasy",
    },
    {
    id: 2,
    title: "The Impact of AI on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
    category: "fantasy",
    },
    {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
    category: "fantasy",
    },
    {
    id: 4,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "J J",
    date: "2023-08-01T10:00:00Z",
    category: "fantasy",
    },
    {
    id: 5,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Mia Brown",
    date: "2023-08-05T14:30:00Z",
    category: "fantasy",
    },
    {
    id: 6,
    title: "Modern Living:",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Samuel L. Jackson",
    date: "2023-08-10T09:15:00Z",
    category: "fantasy",
    },
];

let fantasyLastId = 6;

let chapter_book = [
    {
    id: 1,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "Ashley",
    date: "2023-08-01T10:00:00Z",
    category: "chapter_book",
    },
    {
    id: 2,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Mia",
    date: "2023-08-05T14:30:00Z",
    category: "chapter_book",
    },
    {
    id: 3,
    title: "The Rise of  Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: " Thompson",
    date: "2023-08-01T10:00:00Z",
    category: "chapter_book",
    },
    {
    id: 4,
    title: "Impact of Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Bunkins",
    date: "2023-08-05T14:30:00Z",
    category: "chapter_book",
    },
    {
    id: 5,
    title: "Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Queen",
    date: "2023-08-10T09:15:00Z",
    category: "chapter_book",
    },
    {
    id: 6,
    title: "Modern Living",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Samuel Wade",
    date: "2023-08-10T09:15:00Z",
    category: "chapter_book",
    },
];

let chapter_bookLastId = 6;

let horror = [
    {
    id: 1,
    title: "The Impact AI on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
    category: "horror",
    },
    {
    id: 2,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
    category: "horror",
    },
    {
    id: 3,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "J J",
    date: "2023-08-01T10:00:00Z",
    category: "horror",
    },
    {
    id: 4,
    title: "Sustainable Living: ",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Samuel L. Jackson",
    date: "2023-08-10T09:15:00Z",
    category: "horror",
    },
    {
    id: 5,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
    category: "horror",
    },
    {
    id: 6,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Mia Brown",
    date: "2023-08-05T14:30:00Z",
    category: "horror",
    }
];

let horrorLastId = 6;

let novella = [
    {
    id: 1,
    title: "Modern Living",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "ronaldo",
    date: "2023-08-10T09:15:00Z",
    category: "novella",
    },
    {
    id: 2,
    title: "Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Messi",
    date: "2023-08-10T09:15:00Z",
    category: "novella",
    },
    {
    id: 3,
    title: "Impact of Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Bunkins",
    date: "2023-08-05T14:30:00Z",
    category: "novella",
    },
    {
    id: 4,
    title: "The Rise of  Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: " Thompson",
    date: "2023-08-01T10:00:00Z",
    category: "novella",
    },
    {
    id: 5,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Pepe",
    date: "2023-08-05T14:30:00Z",
    category: "novella",
    },
    {
    id: 6,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "Ashley White",
    date: "2023-08-01T10:00:00Z",
    category: "novella",
    },
];

let novellaLastId = 6;

let picture_book = [
    {
    id: 1,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "Lebron",
    date: "2023-08-01T10:00:00Z",
    category: "picture_book",
    },
    {
    id: 2,
    title: "The Impact AI on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
    category: "picture_book",
    },
    {
    id: 3,
    title: "Sustainable Living: ",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
    category: "picture_book",
    },
    {
    id: 4,
    title: " Tips for an Eco-Friendly Lifestyle",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Samuel L. Jackson",
    date: "2023-08-10T09:15:00Z",
    category: "picture_book",
    },
    {
    id: 5,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
    category: "picture_book",
    },
    {
    id: 6,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Mia Brown",
    date: "2023-08-05T14:30:00Z",
    category: "picture_book",
    }
];

let picture_bookLastId = 6;

let romance = [
    {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Eshe",
    date: "2023-08-01T10:00:00Z",
    category: "romance",
    },
    {
    id: 2,
    title: "The Impact AI on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
    category: "romance",
    },
    {
    id: 3,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Pia",
    date: "2023-08-05T14:30:00Z",
    category: "romance",
    },
    {
    id: 4,
    title: "Modern Living:",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Brown",
    date: "2023-08-10T09:15:00Z",
    category: "romance",
    },
    {
    id: 5,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
    category: "romance",
    },
    {
    id: 6,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "Maximus",
    date: "2023-08-01T10:00:00Z",
    category: "romance",
    }, 
];

let romanceLastId = 6;

let short_story = [
    {
    id: 1,
    title: "The AI",
    content:`
    Artificial Intelligence (AI) has rapidly evolved from a niche technological concept to a transformative force reshaping virtually every facet of modern society.
    From the way we work to the manner in which we interact with one another, AI's influence is pervasive, driving both opportunities and challenges.
    One of the most significant impacts of AI is observed in the field of automation.
    Industries that once relied heavily on manual labor are now increasingly adopting AI-driven technologies to streamline operations, reduce costs, and improve efficiency.
    For instance, in manufacturing, AI-powered robots and machines are taking over tasks that were once performed by human workers, leading to faster production times and higher precision.
    This shift, while beneficial for businesses, raises concerns about job displacement and the future of work.
    The integration of AI in workplaces necessitates a rethinking of the workforce structure, with an emphasis on retraining and upskilling workers to thrive in an AI-dominated environment.
    Beyond the industrial sector, AI is making significant strides in healthcare, where it is revolutionizing diagnostics, treatment planning, and patient care.
    Machine learning algorithms can analyze vast amounts of medical data to detect patterns that may be invisible to the human eye, leading to earlier and more accurate diagnoses.
    For example, AI systems are being used to identify early signs of diseases such as cancer from medical imaging, which can significantly improve patient outcomes.
    Additionally, AI-driven personalized medicine is enabling tailored treatment plans based on a patient's unique genetic makeup, lifestyle, and other factors, thereby enhancing the effectiveness of treatments.
    However, the use of AI in healthcare also raises ethical questions, particularly concerning data privacy and the potential for algorithmic biases that could lead to unequal treatment outcomes.
    In the realm of communication and social interaction, AI has given rise to new forms of engagement and connectivity.
    Virtual assistants like Siri, Alexa, and Google Assistant have become ubiquitous, helping users manage daily tasks, answer queries, and control smart home devices.
    These AI-powered tools have made life more convenient, but they also contribute to a growing dependence on technology that could impact human communication skills and interpersonal relationships.
    `,
    author: "Mia",
    date: "2023-08-05T14:30:00Z",
    category: "short_story",
    },
    {
    id: 2,
    title: "Impact of Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Bunkins",
    date: "2023-08-05T14:30:00Z",
    category: "short_story",
    },
    {
    id: 3,
    title: "Modern Living",
    content: `
    The Role of Technology in Modern Education Technology has become an integral part of modern education, revolutionizing the way students learn, teachers instruct, and educational institutions operate.
    From interactive digital textbooks to online learning platforms, technology has opened up new possibilities for personalized learning, collaboration, and access to information.
    One of the most significant developments in education technology is the rise of online learning platforms.
    These platforms, such as Coursera, edX, and Khan Academy, offer a wide range of courses and resources that allow students to learn at their own pace, anytime and anywhere.
    This flexibility is particularly valuable for non-traditional students, such as working professionals or those with family commitments, who may not have the time to attend traditional classes.
    Online learning also offers the potential to democratize education by making high-quality educational resources accessible to anyone with an internet connection.
    In addition to online learning, technology has enabled more personalized approaches to education.
    Adaptive learning technologies use data and algorithms to tailor educational content to individual students' needs and learning styles.
    By identifying areas where a student may be struggling, these systems can provide targeted interventions and resources, helping to improve learning outcomes.
    This personalized approach is particularly effective in subjects like math and science, where students often have varying levels of understanding and proficiency.
    Technology has also transformed the classroom experience, making learning more interactive and engaging.
    Tools like interactive whiteboards, digital projectors, and educational apps allow teachers to present information in dynamic and visually appealing ways, catering to different learning styles.
    For example, a history lesson can be brought to life with virtual reality, allowing students to explore historical sites and events in a more immersive way.
    Similarly, science experiments can be conducted virtually, enabling students to explore complex concepts without the limitations of physical resources.
    Collaboration and communication have also been enhanced by technology.
    `,
    author: "Jones",
    date: "2023-08-10T09:15:00Z",
    category: "short_story",
    },
    {
    id: 4,
    title: "Breakthrough",
    content: `
    The Evolution of Renewable Energy Renewable energy has seen a remarkable transformation over the past few decades, becoming a cornerstone of global efforts to combat climate change and transition to a sustainable future.
    As the world grapples with the environmental impacts of fossil fuels, renewable energy sources like solar, wind, hydro, and geothermal have gained prominence for their ability to provide clean, abundant, and sustainable power.
    Solar energy, in particular, has experienced exponential growth, driven by advancements in photovoltaic technology and significant cost reductions.
    Once considered a niche energy source, solar power is now one of the fastest-growing energy technologies in the world, with solar panels becoming a common sight on rooftops and in large-scale solar farms.
    Wind energy has also made substantial strides, with wind turbines sprouting up in both onshore and offshore locations.
    The development of more efficient turbine designs and larger installations has increased the capacity and reliability of wind power, making it a critical component of the global energy mix.
    Hydropower, one of the oldest forms of renewable energy, continues to play a vital role in electricity generation, particularly in regions with abundant water resources.
    Large dams and smaller run-of-the-river projects contribute significantly to the global energy supply, providing a stable and reliable source of power.
    Geothermal energy, though less widespread, offers a consistent and sustainable energy source by tapping into the Earth’s natural heat.
    As renewable energy technologies have advanced, so too have the methods for integrating them into the broader energy grid.
    Energy storage technologies, such as lithium-ion batteries, have become increasingly important in balancing the intermittency of solar and wind power.
    By storing excess energy generated during periods of high production, these storage systems help ensure a steady supply of electricity, even when the sun isn't shining, or the wind isn't blowing.
    Furthermore, smart grid technologies are enabling more efficient management and distribution of renewable energy, optimizing power flows and reducing losses.
    Despite the tremendous progress, challenges remain in the widespread adoption of renewable energy.
    The intermittency of solar and wind power requires continued innovation in energy storage and grid management.
    `,
    author: "Coco",
    date: "2023-08-01T10:00:00Z",
    category: "short_story",
    },
    {
    id: 5,
    title: "The Rise of  Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Diamant",
    date: "2023-08-01T10:00:00Z",
    category: "short_story",
    },
    {
    id: 6,
    title: "Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Lit",
    date: "2023-08-10T09:15:00Z",
    category: "short_story",
    },
];

let short_storyLastId = 6;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/books/novella", (req, res) =>{
  res.json(novella);
});

app.get("/books/fantasy", (req, res) =>{
  res.json(fantasy);
});

app.get("/books/romance", (req, res) =>{
  res.json(romance);
});

app.get("/books/horror", (req, res) =>{
  res.json(horror);
});

app.get("/books/short_story", (req, res) =>{
  res.json(short_story);
});

app.get("/books/picture_book", (req, res) =>{
  res.json(picture_book);
});

app.get("/books/chapter_book", (req, res) =>{
  res.json(chapter_book);
});

app.get("/books/novella/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = novella.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/chapter_book/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = chapter_book.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/fantasy/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = fantasy.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/horror/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = horror.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/picture_book/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = picture_book.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/romance/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = romance.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.get("/books/short_story/edit/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const foundBook = short_story.find((copy) => copy.id === id);
  res.json(foundBook);
});

app.post("/books/novella", (req, res) =>{
  const currentId = novellaLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  novellaLastId = currentId;
  console.log(newPost)
  novella.push(newPost)
  res.status(201).json();
});

app.post("/books/chapter_book", (req, res) =>{
  const currentId = chapter_bookLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  chapter_bookLastId = currentId;
  console.log(newPost)
  chapter_book.push(newPost)
  res.status(201).json();
});

app.post("/books/fantasy", (req, res) =>{
  const currentId = fantasyLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  fantasyLastId = currentId;
  console.log(newPost)
  fantasy.push(newPost)
  res.status(201).json();
});

app.post("/books/horror", (req, res) =>{
  const currentId = horrorLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  horrorLastId = currentId;
  console.log(newPost)
  horror.push(newPost)
  res.status(201).json();
});

app.post("/books/picture_book", (req, res) =>{
  const currentId = picture_bookLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  picture_bookLastId = currentId;
  console.log(newPost)
  picture_book.push(newPost)
  res.status(201).json();
});

app.post("/books/romance", (req, res) =>{
  const currentId = romanceLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  romanceLastId = currentId;
  console.log(newPost)
  romance.push(newPost)
  res.status(201).json();
});

app.post("/books/short_story", (req, res) =>{
  const currentId = short_storyLastId += 1 ;
  const newPost = {
    id : currentId,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    date : new Date(),
    category : req.body.category
  }
  short_storyLastId = currentId;
  console.log(newPost)
  short_story.push(newPost)
  res.status(201).json();
});

app.patch("/books/novella/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = novella.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = novella.findIndex((copy) => copy.id === id);
  novella[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/chapter_book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = chapter_book.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = chapter_book.findIndex((copy) => copy.id === id);
  chapter_book[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/fantasy/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = fantasy.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = fantasy.findIndex((copy) => copy.id === id);
  fantasy[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/horror/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = horror.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = horror.findIndex((copy) => copy.id === id);
  horror[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/picture_book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = picture_book.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = picture_book.findIndex((copy) => copy.id === id);
  picture_book[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/romance/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = romance.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = romance.findIndex((copy) => copy.id === id);
  romance[position] = updatedBook;
  res.json(updatedBook);
});

app.patch("/books/short_story/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const originalCopy = short_story.find((copy) => copy.id === id);
  const updatedBook = {
    id : originalCopy.id,
    title : req.body.title || originalCopy.title,
    content : req.body.content || originalCopy.content,
    author : req.body.author || originalCopy.author,
    date : originalCopy.date,
    category : req.body.category || originalCopy.category
  }
  const position = short_story.findIndex((copy) => copy.id === id);
  short_story[position] = updatedBook;
  res.json(updatedBook);
});

app.delete("/short_story/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = short_story.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  short_story.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/romance/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = romance.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  romance.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/picture_book/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = picture_book.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  picture_book.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/novella/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = novella.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  novella.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/horror/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = horror.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  horror.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/fantasy/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = fantasy.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  fantasy.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.delete("/chapter_book/delete/:id", (req, res) =>{
  const id = parseInt(req.params.id);
  const index = chapter_book.findIndex((copy) => copy.id  === id);
  if (index === -1) res.status(500).json({message : "Book not found"});
  chapter_book.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.get("/novella/:id", (req, res) => {
  const foundBook = novella.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/chapter_book/:id", (req, res) => {
  const foundBook = chapter_book.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/fantasy/:id", (req, res) => {
  const foundBook = fantasy.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/horror/:id", (req, res) => {
  const foundBook = horror.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/picture_book/:id", (req, res) => {
  const foundBook = picture_book.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/romance/:id", (req, res) => {
  const foundBook = romance.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});

app.get("/short_story/:id", (req, res) => {
  const foundBook = short_story.find((copy) => copy.id === parseInt(req.params.id));
  const neededPart = foundBook.content;
  res.json(neededPart)
});


app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server currently running at port ${port}`)
})

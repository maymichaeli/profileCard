import { useState } from "react"

export const Card = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("May Michaeli");
    const [description, setDescription] = useState("software developer");

    const [tempName, setTempName] = useState(name);
    const [tempDesc, setTempDesc] = useState(description);

    // const handleSave = () => {
    //     setName(tempName);
    //     setDescription(tempDesc);
    //     setIsEditing(false);
    // };

    // const handleCancel = () => {
    //     setTempName(name);
    //     setTempDesc(description);
    //     setIsEditing(false);
    // };

    return (
        <div className="w-80 flex flex-col items-center bg-white rounded-xl">
            <div className="w-full bg-blue-100 rounded-t-xl flex flex-col justify-center items-center p-2">
                <button className="self-end mr-3 hover:cursor-pointer transition-transform duration-200 hover:scale-110"
                    onClick={() => setIsEditing(true)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>
                </button>
                <img src="https://thumbs.dreamstime.com/b/cartoon-monster-face-vector-halloween-green-cool-avatar-wide-opened-mouth-smile-big-set-faces-package-design-123305269.jpg" alt="profile"
                    className="max-w-35 sm:w-48 md:w-56 h-auto max-h-64 object-contain mb-4 rounded-4xl shadow-md" />
                <h1>@maymichaeli</h1>
            </div>

            <div className="flex flex-grow flex-col mt-4 p-3 items-center ">
                {isEditing ? (
                    <>
                        <input className="mb-2 border p-2 rounded w-full"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)} />
                        <textarea
                            className="border p-2 rounded w-full"
                            value={tempDesc}
                            onChange={(e) => setTempDesc(e.target.value)}
                        />
                        <div className="flex justify-center gap-3 mt-8">
                            <button
                                onClick={() => {
                                    setName(tempName);
                                    setDescription(tempDesc);
                                    setIsEditing(false);
                                }}
                                className="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setTempName(name);
                                    setTempDesc(description);
                                    setIsEditing(false);
                                }}
                                className="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="flex justify-center gap-3 mt-8">
                            <button type="button" className="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">Follow</button>
                            <button type="button" className="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:cursor-pointer">Message</button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import * as C from "@/components/index";
import { useToast } from "@/hooks/use-toast";
import * as R from "@/stores/services/project";
import { IoClose } from 'react-icons/io5';

interface Props {
    isUpdate: boolean;
    showProjectModal: boolean;
    setShowProjectModal: Function;
    initialData?: {
        img: string;
        title: string;
        url: string;
        _id: string;
    };
}

const ProjectModal: React.FC<Props> = ({ isUpdate, initialData, setShowProjectModal, showProjectModal }) => {

    const { toast } = useToast()
    const [createProject, { isLoading }] = R.useCreateProjectMutation();
    const [updateProject, { isLoading: updateIsLoading }] = R.useUpdateProjectMutation();

    const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({
        initialValues: {
            img: initialData?.img || "",
            title: initialData?.title || "",
            url: initialData?.url || "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            img: Yup.string()
                .required('Image URL is required'),
            title: Yup.string()
                .min(3, 'Title must be at least 3 characters long')
                .required('Title is required'),
            url: Yup.string()
                .required('URL is required'),
        }),
        onSubmit: async (formValues) => {
            try {
                let res;

                if (isUpdate) {
                    res = await updateProject({ id: initialData?._id, ...formValues });
                } else {
                    res = await createProject(formValues);
                }

                if (res && res.data && res.data.success) {
                    toast({ title: res.data.message });
                } else {
                    toast({ variant: "destructive", title: "Operation failed!" });
                }
            } catch (error: any) {
                console.error(error);
                toast({ variant: "destructive", title: "Something Went Wrong!" });
            }
        },
    });

    return (
        <div className='bg-black/90 z-50 fixed overflow-hidden inset-0 flex items-center justify-center flex-col gap-5'>

            <IoClose
                onClick={() => setShowProjectModal(!showProjectModal)}
                className='text-white absolute top-8 right-8 text-3xl hover:text-red-700 cursor-pointer'
            />

            <h1 className='text-center font-bold text-white capitalize md:text-3xl'>
                {isUpdate ? "Update Project" : "Add Project"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" >
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">
                        Your title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="title"
                        className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Project Title"
                    />
                    {touched.title && errors.title && (
                        <p className="text-red-500 text-xs">{errors.title}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="img" className="block mb-2 text-sm font-medium text-white">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="img"
                        value={values.img}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="img"
                        className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com/image.jpg"
                    />
                    {touched.img && errors.img && (
                        <p className="text-red-500 text-xs">{errors.img}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="url" className="block mb-2 text-sm font-medium text-white">
                        Project URL
                    </label>
                    <input
                        type="text"
                        name="url"
                        value={values.url}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="url"
                        className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com"
                    />
                    {touched.url && errors.url && (
                        <p className="text-red-500 text-xs">{errors.url}</p>
                    )}
                </div>

                <C.Button
                    isLoading={isLoading || updateIsLoading}
                    type="submit"
                    className="w-full focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    {isUpdate ? "Update Project" : "Add Project"}
                </C.Button>
            </form>
        </div>
    );
};

export default ProjectModal;

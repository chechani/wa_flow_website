import React, { useState } from 'react';


const ExcelToJson = () => {
  const [screens, setScreens] = useState([]);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [contentType, setContentType] = useState('');
    const [contentLabel, setContentLabel] = useState('');
    const [contentText, setContentText] = useState('');
    const [contentMedia, setContentMedia] = useState(null);
    const [contentList, setContentList] = useState('');

    const addScreen = () => {
        const screenTitle = prompt('Enter screen title (no special characters or hyphens):');
        if (screenTitle && /^[a-zA-Z0-9 ]*$/.test(screenTitle)) {
            const newScreen = { title: screenTitle, content: [] };
            setScreens([...screens, newScreen]);
            setCurrentScreenIndex(screens.length);
        } else {
            alert('Invalid screen title. Please use only letters, numbers, and spaces.');
        }
    };

    const editScreen = (index) => {
        const screenTitle = prompt('Edit screen title (no special characters or hyphens):', screens[index].title);
        if (screenTitle !== null && /^[a-zA-Z0-9 ]*$/.test(screenTitle)) {
            const updatedScreens = screens.map((screen, i) => (i === index ? { ...screen, title: screenTitle } : screen));
            setScreens(updatedScreens);
        } else {
            alert('Invalid screen title. Please use only letters, numbers, and spaces.');
        }
    };

    const deleteScreen = (index) => {
        const updatedScreens = screens.filter((_, i) => i !== index);
        setScreens(updatedScreens);
        if (currentScreenIndex === index) {
            setCurrentScreenIndex(null);
        }
    };
    
    const selectScreen = (index) => {
        setCurrentScreenIndex(index);
    };

    const handleContentTypeChange = (e) => {
        setContentType(e.target.value);
        setContentLabel('');
        setContentText('');
        setContentMedia(null);
        setContentList('');
    };

    const addContent = () => {
        if (currentScreenIndex === null || (!contentType || (!contentLabel && !contentText && !contentMedia && !contentList))) {
            alert('Please select a screen, content type, and enter the content text.');
            return;
        }
    
        const newItem = { type: contentType, label: contentLabel };
        if (contentText) newItem.content = contentText;
        if (contentMedia) newItem.content = URL.createObjectURL(contentMedia);
        if (contentList) {
            const lines = contentList.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
            newItem.content = lines.map((line) => ({
                id: line.toLowerCase().replace(/\s+/g, '-').substring(0, 30),
                title: line.substring(0, 30),
            }));
        }
    
        const updatedScreens = screens.map((screen, i) =>
            i === currentScreenIndex ? { ...screen, content: [...screen.content, newItem] } : screen
        );
        setScreens(updatedScreens);
        setEditingIndex(null);
    
        // Reset content input fields after adding content
        setContentType(''); // Reset select content type field
        setContentLabel('');
        setContentText('');
        setContentMedia(null);
        setContentList('');
    };
    
    

    return (
        <>
        <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0, backgroundColor: '#f4f4f9' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{textAlign:"center",color:"Red"}}><strong style={{color:"black"}}>Note - </strong> This is still a work in progress</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <ScreensPanel
                        screens={screens}
                        currentScreenIndex={currentScreenIndex}
                        addScreen={addScreen}
                        selectScreen={selectScreen}
                        editScreen={editScreen}
                        deleteScreen={deleteScreen}
                    />
                    <Panel
                        currentScreenIndex={currentScreenIndex}
                        contentType={contentType}
                        handleContentTypeChange={handleContentTypeChange}
                        contentLabel={contentLabel}
                        setContentLabel={setContentLabel}
                        contentText={contentText}
                        setContentText={setContentText}
                        contentMedia={contentMedia}
                        setContentMedia={setContentMedia}
                        contentList={contentList}
                        setContentList={setContentList}
                        addContent={addContent}
                    />
                    <ContentPreview screens={screens} currentScreenIndex={currentScreenIndex} setScreens={setScreens} />
                </div>
                <SubmitButton screens={screens} />
            </div>
        </div>
        </>
    );
};

const ScreensPanel = ({ screens, currentScreenIndex, addScreen, selectScreen, editScreen, deleteScreen }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', backgroundColor: '#fff', boxSizing: 'border-box', height: 'auto', width: '300px' }}>
            <h3 style={{fontSize:"25px",fontWeight:"bold" }}>Screens</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {screens.map((screen, index) => (
                    <li
                        key={index}
                        style={{ marginBottom: '10px', cursor: 'pointer', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', borderRadius: '5px', transition: 'background-color 0.3s', backgroundColor: index === currentScreenIndex ? 'white' : 'black', color: index === currentScreenIndex ? 'black' : 'initial' }}
                        onClick={() => selectScreen(index)}
                    >
                        {screen.title}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={(e) => {
                                e.stopPropagation();
                                editScreen(index);
                            }}>✎</span>
                            <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={(e) => {
                                e.stopPropagation();
                                deleteScreen(index);
                            }}>x</span>
                        </div>
                    </li>
                ))}
            </ul>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px', transition: 'background-color 0.3s' }} onClick={addScreen}>Add Screen</button>
        </div>
    );
};

const Panel = ({
    currentScreenIndex,
    contentType,
    handleContentTypeChange,
    contentLabel,
    setContentLabel,
    contentText,
    setContentText,
    contentMedia,
    setContentMedia,
    contentList,
    setContentList,
    addContent,
}) => {
    return (
        <div style={{ width: "400px", border: '1px solid #ddd', borderRadius: '5px', padding: '20px', backgroundColor: '#fff' }}>
            <div style={{ fontSize: '25px', textAlign: 'left', fontWeight:"bold" }}>
                {currentScreenIndex !== null ? `Screen ${currentScreenIndex + 1}` : ''}
            </div>
            <label htmlFor="content-type" style={{ fontSize: "25px" }}>Content Type</label>
            <select id="content-type" value={contentType} onChange={handleContentTypeChange} disabled={currentScreenIndex === null} style={{ marginTop: "10px", marginBottom: "10px" }}>
                <option value="">Select content type</option>
                <option value="large-heading">Large Heading</option>
                <option value="small-heading">Small Heading</option>
                <option value="caption">Caption</option>
                <option value="body">Body</option>
                <option value="text-input">Text Input</option>
                <option value="text-area">Text Area</option>
                <option value="media">Media</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio Button</option>
                <option value="dropdown">Dropdown</option>
            </select>
            <div id="content-input-container">
                {['large-heading', 'small-heading', 'caption', 'body', 'text-input', 'text-area'].includes(contentType) && (
                    <input
                        type="text"
                        id="content-text"
                        placeholder={`Enter ${contentType.replace('-', ' ')}`}
                        value={contentText}
                        onChange={(e) => setContentText(e.target.value)}
                    />
                )}
                {contentType === 'media' && (
                    <input
                        type="file"
                        id="content-media"
                        onChange={(e) => setContentMedia(e.target.files[0])}
                    />
                )}
                {['text-input', 'text-area', 'checkbox', 'radio', 'dropdown'].includes(contentType) && (
                    <input
                        type="text"
                        id="content-label"
                        placeholder="Enter label"
                        value={contentLabel}
                        onChange={(e) => setContentLabel(e.target.value)}
                    />
                )}
                {['checkbox', 'radio', 'dropdown'].includes(contentType) && (
                    <textarea
                        id="content-list"
                        placeholder="Enter options separated by new lines"
                        value={contentList}
                        onChange={(e) => setContentList(e.target.value)}
                    />
                )}
            </div>
            <button id="add-content-btn" style={{marginTop:"5px", width: '100%', padding: "10px", border: "none", background: currentScreenIndex === null ? '#f5f5f5' : '#28a745', color: currentScreenIndex === null ? 'black' : 'white', borderRadius: "7px" }} onClick={addContent} disabled={currentScreenIndex === null}>
                Add Content
            </button>

        </div>
    );
};

const ContentPreview = ({ screens, currentScreenIndex, setScreens }) => {
    const updateScreens = (updatedContent) => {
        const updatedScreens = screens.map((screen, index) =>
            index === currentScreenIndex ? { ...screen, content: updatedContent } : screen
        );
        setScreens(updatedScreens);
    };

    const deleteContent = (index) => {
        const updatedContent = screens[currentScreenIndex].content.filter((_, i) => i !== index);
        updateScreens(updatedContent);
    };

    const editContent = (index) => {
        const content = screens[currentScreenIndex].content[index];
        // Add logic to edit content
    };

    return (
        <div style={{ width: '600px', height: 'auto', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '5px' }}>
        {currentScreenIndex === null ? (
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#B22222', marginTop: "25px" }}>Add a screen first to start building your form.</p>
        ) : (
            screens[currentScreenIndex].content.map((item, index) => (
                <div key={index} style={{ margin: '8px', cursor: 'move', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fff' }} className="content-item">
                    <div style={{ flexGrow: 1 }}>
                        {item.type === 'large-heading' && <h1>{item.content}</h1>}
                        {item.type === 'small-heading' && <h2>{item.content}</h2>}
                        {item.type === 'caption' && <p><em>{item.content}</em></p>}
                        {item.type === 'body' && <p>{item.content}</p>}
                        {item.type === 'text-input' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><label style={{ minWidth: '120px' }}>{item.label}</label><input type="text" placeholder={item.label} /></div>}
                        {item.type === 'text-area' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><label style={{ minWidth: '120px' }}>{item.label}</label><textarea placeholder={item.content} /></div>}
                        {item.type === 'media' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><img src={item.content} alt={item.label} style={{ maxWidth: '100px', maxHeight: '100px' }} className="preview-image" /><input type="file" /></div>}
                        {item.type === 'checkbox' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><label style={{ minWidth: '120px' }}>{item.label}</label><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }} className="option-group">{item.content.map(option => <div key={option.id}><input type="checkbox" name={item.label} /><label>{option.title}</label></div>)}</div></div>}
                        {item.type === 'radio' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><label style={{ minWidth: '120px' }}>{item.label}</label><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }} className="option-group">{item.content.map(option => <div key={option.id}><input type="radio" name={item.label} /><label>{option.title}</label></div>)}</div></div>}
                        {item.type === 'dropdown' && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="label-container"><label style={{ minWidth: '120px' }}>{item.label}</label><select style={{ minWidth: '200px' }} className="fixed-length-dropdown">{item.content.map(option => <option key={option.id}>{option.title}</option>)}</select></div>}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }} className="button-group">
                        <span style={{ cursor: 'pointer', fontWeight: 'bold', color: 'red',marginLeft:"5px" }} className="delete-btn" onClick={() => deleteContent(index)}>x</span>
                        <span style={{ cursor: 'pointer', fontWeight: 'bold', color: 'blue',marginLeft:"5px" }} className="edit-btn" onClick={() => editContent(index)}>✎</span>
                    </div>
                </div>
            ))
        )}
    </div>
    );
};

const SubmitButton = ({ screens }) => {
    const submitScreens = () => {
        console.log(JSON.stringify(screens, null, 2));
    };

    return (
        <button style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold', fontSize: '60%', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '5px', alignSelf: 'flex-end', transition: 'background-color 0.3s' }} onClick={submitScreens}>
            Submit Screens
        </button>
    );
};

export default ExcelToJson;
